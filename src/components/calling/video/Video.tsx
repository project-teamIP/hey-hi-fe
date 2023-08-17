import React, { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import styled from "styled-components";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
  BsFillMicFill,
  BsFillMicMuteFill,
  BsFillXOctagonFill,
  BsBoxArrowRight,
} from "react-icons/bs";
//BiSolidVideo, BiSolidVideoOff BsFillCameraVideoFill BsFillCameraVideoOffFill
//비디오
//BsFillMicFill, BsFillMicMuteFill //마이크
//BsFillXOctagonFill 신고
//BsBoxArrowRight

type LanguageData = {
  id: number;
  language: string;
};

const data: LanguageData[] = [
  { id: 1, language: "KOREAN" },
  { id: 2, language: "ENGLISH" },
  { id: 3, language: "KOREAN" },
  { id: 4, language: "ENGLISH" },
  { id: 5, language: "ENGLISH" },
  { id: 6, language: "KOREAN" },
  { id: 7, language: "KOREAN" },
];

const Video: React.FC<{}> = () => {
  const socketUrl = process.env.REACT_APP_WEBSOCKET_SERVER_URL;
  const socketRef = useRef<Socket>();
  const [savedUserId, setSavedUserId] = useState<string | null>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const streamRef = useRef<MediaStream | null>(null);
  const myPeerRef = useRef<RTCPeerConnection>();
  const myVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    getMedia();
  }, []);
  makeConnection();
  async function getMedia() {
    try {
      const myStream: MediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      if (myVideoRef.current) {
        streamRef.current = myStream;
        myVideoRef.current.srcObject = myStream;
      }
    } catch (e) {
      console.log(e);
    }
  }
  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSavedUserId(event.target.value);
  };
  function onClickCameraOffHandler() {
    if (streamRef.current) {
      streamRef.current.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
    }
    // 카메라 오프 상태를 기준으로 버튼 텍스트와 카메라 상태를 변경합니다.
    setIsCameraOn((prevState) => !prevState);
  }

  function onClickAudioOffHandler() {
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
    }
    // 카메라 오프 상태를 기준으로 버튼 텍스트와 카메라 상태를 변경합니다.
    setIsAudioOn((prevState) => !prevState);
  }

  console.log(savedUserId);

  const PeerFaceRef = useRef<HTMLVideoElement | null>(null);
  const onClickDisconnectionBtn = () => {
    if (socketRef.current) socketRef.current.disconnect();
    console.log("연결 해제");
  };
  const onClickMatchMessageBtn = () => {
    const message = {
      userId: savedUserId,
    };
    if (socketRef.current) socketRef.current.emit("match", JSON.stringify(message));
    console.log("매칭 테스트");
  };

  useEffect(() => {
    console.log("socketUrl", socketUrl);
    if (socketUrl) {
      socketRef.current = io(socketUrl);
      socketRef.current.on("success", async (data: any) => {
        console.log("서버로부터 메시지 success 메시지 수신:", data);
        if (myPeerRef.current && socketRef.current) {
          try {
            const offer = await myPeerRef.current.createOffer();
            await myPeerRef.current.setLocalDescription(offer);
            socketRef.current.emit("offer", JSON.stringify(offer));
            console.log("myPeerRef.current.LocalDescription", myPeerRef.current.localDescription);
          } catch (e) {
            console.log("오퍼", e);
          }
        }
      });
      socketRef.current.on("offer", async (data: any) => {
        if (myPeerRef.current && socketRef.current) {
          try {
            console.log("서버로부터 메시지 offer 수신 : ", data);
            await myPeerRef.current.setRemoteDescription(data);
            const answer = await myPeerRef.current.createAnswer();
            await myPeerRef.current.setLocalDescription(answer);
            socketRef.current.emit("answer", JSON.stringify(answer));
            console.log("myPeerRef.current.LocalDescription", myPeerRef.current.localDescription);
            console.log("myPeerRef.current.remoteDescription", myPeerRef.current.remoteDescription);
          } catch (e) {
            console.log("오퍼받음", e);
          }
        }
      });
      socketRef.current.on("wait", (data: any) => {
        console.log("서버로부터 wait 메시지 수신 : ", data);
      });
      socketRef.current.on("answer", async (data: any) => {
        console.log("서버로부터 answer 메시지 수신 : ", data);
        if (myPeerRef.current) {
          try {
            await myPeerRef.current.setRemoteDescription(data);
            console.log("myPeerRef.current.remoteDescription", myPeerRef.current.remoteDescription);
          } catch (e) {
            console.log("앤서", e);
          }
        }
      });
      socketRef.current.on("ice", async (data: any) => {
        if (myPeerRef.current) {
          try {
            console.log("서버로부터 ice 메시지 수신 : ", data);
            await myPeerRef.current.addIceCandidate(data);
          } catch (e) {
            console.log("아이스", e);
          }
        }
      });
      socketRef.current.on("connect", () => {
        console.log("커넥트 발생");
      });

      socketRef.current.on("disconnect", () => {
        console.log("연결 해제");
      });
      socketRef.current.on("error", (data) => {
        console.log("서버로부터 error 메시지 수신 : ", data);
      });
    } else {
      console.log("socketUrl undefined");
    }
  }, []);
  async function makeConnection() {
    console.log("1");
    myPeerRef.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: ["stun:stun.l.google.com:19302"],
        },
      ],
    });
    console.log("myPeerRef.current2", myPeerRef.current);
    myPeerRef.current.addEventListener("icecandidate", handleIce);
    myPeerRef.current.addEventListener("addstream", handleAddStream);
    if (streamRef.current) {
      const mediaStream = streamRef.current;
      mediaStream.getTracks().forEach((track) => {
        if (myPeerRef.current) {
          myPeerRef.current.addTrack(track, mediaStream);
        }
      });
      console.log("mediaStream", mediaStream);
    } else {
      console.log("Stream is null");
    }
  }

  function handleIce(data: any) {
    if (socketRef.current) socketRef.current.emit("ice", JSON.stringify(data.candidate));
    else {
      console.log("handleIce 실패");
    }
  }

  function handleAddStream(data: any) {
    if (data.stream && PeerFaceRef.current) {
      PeerFaceRef.current.srcObject = data.stream;
    } else {
      console.log("Peer's Stream is not available in the data.");
    }
  }

  return (
    <div>
      <h1>WebSocket Test</h1>
      <p>Check the browser console for incoming messages.</p>
      <h2>Your ID:</h2>
      <form>
        <input
          type="text"
          id="userId"
          placeholder="User ID를 입력하세요"
          onChange={handleUserIdChange}
        />
      </form>
      <div>내 아이디:</div>
      <ul>
        <h2>UserTable</h2>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} : {item.language}
          </li>
        ))}
      </ul>
      <div>
        <h2>매칭을 시작할까요?</h2>
        <button id="matchButton" onClick={onClickMatchMessageBtn}>
          매칭 시작!
        </button>
      </div>
      <div>
        <h2>매칭을 취소할까요?</h2>
        <button id="matchStopButton" onClick={onClickDisconnectionBtn}>
          매칭 종료
        </button>
        <VideoWrapper>
          <VideoContainer>
            <div>홍길동(나)</div>
            <VideoBox>
              <video id="myFace" ref={myVideoRef} autoPlay playsInline />
            </VideoBox>
            <ButtonGroup>
              <ButtonStyle onClick={onClickCameraOffHandler}>
                {isCameraOn ? (
                  <div>
                    <ButtonInnerStyle>
                      <BsFillCameraVideoOffFill size={4.5 * 4.5} />
                      <p>비디오 끄기</p>
                    </ButtonInnerStyle>
                  </div>
                ) : (
                  <div>
                    <ButtonInnerStyle>
                      <BsFillCameraVideoFill size={4.5 * 4.5} />
                      <p>비디오 켜기</p>
                    </ButtonInnerStyle>
                  </div>
                )}
              </ButtonStyle>
              <ButtonStyle onClick={onClickAudioOffHandler}>
                {isAudioOn ? (
                  <div>
                    <ButtonInnerStyle>
                      <BsFillMicMuteFill size={4.5 * 4.5} />
                      <p>마이크 끄기</p>
                    </ButtonInnerStyle>
                  </div>
                ) : (
                  <div>
                    <ButtonInnerStyle>
                      <BsFillMicFill size={4.5 * 4.5} />
                      <p>마이크 켜기</p>
                    </ButtonInnerStyle>
                  </div>
                )}
              </ButtonStyle>
              <ButtonStyle>
                <ButtonInnerStyle>
                  <BsFillXOctagonFill size={4.5 * 4.5} />
                  <p>신고하기</p>
                </ButtonInnerStyle>
              </ButtonStyle>
            </ButtonGroup>
          </VideoContainer>
          <h3>김땡땡(상대방)</h3>
          <VideoBox>
            <video id="PeerFace" ref={PeerFaceRef} autoPlay playsInline />
          </VideoBox>
        </VideoWrapper>
      </div>
    </div>
  );
};

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 23px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoBox = styled.div`
  width: 519px;
  height: 742px;
  background-color: green;
  box-sizing: border-box; /* 이 부분 추가 */
  border-radius: 30px;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const ButtonStyle = styled.button`
  width: 160px;
  height: 52px;
  border: 1px solid #bababa;
  background-color: #f8f8f8;
  color: #a0a0a0;
  border-radius: 15px;
  font-size: 17px;
  font-weight: 500;

  &:active {
    border-color: #ff6e46;
    color: #ff6e46;
  }
`;

const ButtonInnerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export default Video;
