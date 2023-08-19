import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
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
import Button from "../../common/button/Button";
import { getUserInfo } from "../../../api/api";
import { useQuery } from "react-query";

type userInfoData = {
  loginId: string;
  nickname: string;
  country: string;
  interest: string;
};

const Video: React.FC<{}> = () => {
  const { data, isLoading } = useQuery("userInfo", () => getUserInfo());
  const [userInfo, setUserInfo] = useState<userInfoData>({
    loginId: "",
    nickname: "",
    country: "",
    interest: "",
  });
  useEffect(() => {
    if (!isLoading && data) {
      setUserInfo({
        loginId: data.loginId,
        nickname: data.nickname,
        country: data.country,
        interest: data.interest,
      });
    }
  }, [isLoading, data]);
  console.log("userInfo", userInfo);

  // console.log("message는:", message);
  const navigate = useNavigate();
  const socketUrl = process.env.REACT_APP_WEBSOCKET_SERVER_URL;
  const socketRef = useRef<Socket>();
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const streamRef = useRef<MediaStream | null>(null);
  const myPeerRef = useRef<RTCPeerConnection>();
  const myVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isWelcomeHidden, setIsWelcomeHidden] = useState(false);
  const [isCallHidden, setIsCallHidden] = useState(true);

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

  const PeerFaceRef = useRef<HTMLVideoElement | null>(null);
  const onClickDisconnectionBtn = () => {
    if (socketRef.current) socketRef.current.disconnect();
    console.log("연결 해제");
  };
  const onClickMatchMessageBtn = async () => {
    const message = {
      loginId: userInfo.loginId,
    };
    setIsWelcomeHidden(true);
    setIsCallHidden(false);
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
          } catch (e) {
            console.log("앤서", e);
          }
        }
      });
      socketRef.current.on("matchUserInfo", (data: any) => {
        console.log("서버로부터 온 상대방 정보:", data);
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
      const message = {
        nickname: userInfo.nickname,
        country: userInfo.country,
        interest: userInfo.interest,
      };
      console.log("message", message);
      try {
        if (socketRef.current) {
          const messageJSON = JSON.stringify(message);
          socketRef.current.emit("matchUserInfo", messageJSON);
          console.log("유저정보 주기");
        }
      } catch (error) {
        // setLocalDescription()에서 발생한 오류 처리
        console.error("Error setting local description:", error);
      }
    } else {
      console.log("Peer's Stream is not available in the data.");
    }
  }

  const onClickEndCalling = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <MediaBox hidden={isWelcomeHidden}>
        <MatchingBox>
          <div>
            <h2>매칭 테스트</h2>
            <div style={{ display: "flex", gap: "10px" }}>
              <h2>Your ID:{userInfo.loginId}</h2>
              <div style={{ display: "flex", gap: "20px" }}>
                <Button.Primary
                  size="loginbtn"
                  bc="#EFF0F1"
                  color="#000"
                  activebc="#FF6E46"
                  onClick={onClickMatchMessageBtn}>
                  매칭 시작!
                </Button.Primary>
                <Button.Primary
                  size="loginbtn"
                  bc="#EFF0F1"
                  color="#000"
                  activebc="#FF6E46"
                  onClick={onClickDisconnectionBtn}>
                  매칭 종료
                </Button.Primary>
              </div>
            </div>
            <div></div>
          </div>
        </MatchingBox>
      </MediaBox>
      <MediaBox hidden={isCallHidden}>
        <div style={{ display: "flex", gap: "20px" }}>
          <CallingTextGroup>
            <h4>서울에 거주중인</h4>
            <h2>서울 홍길동 님과 통화 중</h2>
          </CallingTextGroup>
          <CallTimer>00:00:00</CallTimer>
        </div>
        <VideoWrapper>
          <VideoContainer>
            <WithVedioTag>
              <VideoBox>
                <video id="myFace" ref={myVideoRef} autoPlay playsInline />
                <h4>홍길동(나)</h4>
              </VideoBox>
            </WithVedioTag>
          </VideoContainer>
          <WithVedioTag>
            <VideoBox>
              <video id="PeerFace" ref={PeerFaceRef} autoPlay playsInline />
              <h4>김땡땡(상태방)</h4>
            </VideoBox>
          </WithVedioTag>
        </VideoWrapper>
        <ButtonGroup>
          <div style={{ display: "flex", gap: "10px" }}>
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
          </div>
          <ButtonStyle onClick={onClickEndCalling}>
            <ButtonInnerStyle>
              <BsBoxArrowRight size={4.5 * 4.5} />
              <p>나가기</p>
            </ButtonInnerStyle>
          </ButtonStyle>
        </ButtonGroup>
      </MediaBox>
    </>
  );
};

const MatchingBox = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #f0f2f4;
`;

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
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 92%;
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

const CallingTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-size: 22px;
    font-weight: 600;
  }
  h4 {
    font-size: 17px;
    font-weight: 500;
    color: #5a5a5a;
  }
`;

const CallTimer = styled.div`
  background-color: #ff6e46;
  width: 141px;
  height: 49px;
  border-radius: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
`;

const MediaBox = styled.div`
  padding: 50px 30px 20px 30px;
  width: 100%;
  max-width: 1200px;
  z-index: 1;
  h2 {
    color: #000;
    font-size: 22px;
    font-weight: 600;
    line-height: normal;
  }

  h4 {
    color: #000;
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
  }
`;

const WithVedioTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h4 {
    margin-top: -60px;
    margin-left: 10px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: #000;
    width: 121px;
    height: 47px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }
`;

export default Video;
