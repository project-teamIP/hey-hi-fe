import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { io, Socket } from "socket.io-client";
import styled, { keyframes } from "styled-components";
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
import * as S from "./style";
import * as M from "../../common/modal/notice/style";
import spinPath from "../../../assets/images/match_spinner.svg";

// type userInfoData = {
//   loginId: string;
//   nickname: string;
//   country: string;
//   interests: string[];
// };

const Video: React.FC<{}> = () => {
  // const [msgHeadline, setMsgHeadline] = useState("매칭 중입니다.");
  // const [msgContent, setMsgContent] = useState("나와 관심사가 비슷한 친구와 매칭을 시도하고 있어요!");
  // const msgHeadline = useRef("매칭 중입니다.");
  // const msgContent = useRef("나와 관심사가 비슷한 친구와 매칭을 시도하고 있어요!");
  const [isMatchingModalOpen, setIsMatchingModalOpen] = React.useState(true);
  const { data, isLoading } = useQuery("userInfo", () => getUserInfo());
  // console.log("message는:", message);
  const navigate = useNavigate();
  const socketUrl = process.env.REACT_APP_SERVER_URL;
  const socketRef = useRef<Socket>();
  // const senderRef = useRef<RTCRtpSender>();
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const streamRef = useRef<MediaStream | null>(null);
  const myPeerRef = useRef<RTCPeerConnection>();
  const myVideoRef = useRef<HTMLVideoElement | null>(null);
  const PeerFaceRef = useRef<HTMLVideoElement | null>(null);
  const [isWelcomeHidden, setIsWelcomeHidden] = useState(false);
  const [isCallHidden, setIsCallHidden] = useState(true);
  const userInfoRef = useRef({
    loginId: "",
    nickname: "",
    country: "",
    interests: [],
  });
  const opponentInfoRef = useRef({
    loginId: "",
    nickname: "",
    country: "",
    interests: [],
  });

  useEffect(() => {
    if (!isLoading && data) {
      userInfoRef.current.loginId = data.loginId;
      userInfoRef.current.nickname = data.nickname;
      userInfoRef.current.country = data.country;
      userInfoRef.current.interests = data.interests;
    }
  }, [isLoading, data]);

  const isStartedMatchSystem = async () => {
    const message = {
      loginId: userInfoRef.current.loginId,
    };
    // setIsWelcomeHidden(true);
    // setIsCallHidden(false);
    if (socketRef.current) socketRef.current.emit("match", message);
    console.log("매칭 테스트");
  };

  // isStartedMatchSystem();
  // console.log("userInfo", userInfoRef.current);

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

  // const onClickDisconnectionBtn = () => {
  //   if (socketRef.current) socketRef.current.disconnect();
  //   console.log("연결 해제");
  // };
  function onModalTextChangeHandler() {
    setIsWelcomeHidden(true);
    setIsCallHidden(false);
    setTimeout(() => {
      setIsMatchingModalOpen(false);
    }, 3000);
  }

  useEffect(() => {
    // console.log("socketUrl", socketUrl);
    if (socketUrl) {
      socketRef.current = io(socketUrl);
      socketRef.current.on("wait", (data: any) => {
        console.log("서버로부터 wait 메시지 수신 : ", data);
      });
      socketRef.current.on("success", async (data: any) => {
        console.log("서버로부터 메시지 success 메시지 수신:", data);
        const message = {
          nickname: userInfoRef.current.nickname,
          country: userInfoRef.current.country,
          interests: userInfoRef.current.interests,
        };
        console.log("message", message);
        try {
          if (socketRef.current) {
            socketRef.current.emit("matchUserInfo", message);
            console.log("유저정보 주기");
          }
        } catch (error) {
          // setLocalDescription()에서 발생한 오류 처리
          console.error("Error matchUserInfo description:", error);
        }
      });
      socketRef.current.on("matchUserInfo", async (data: any) => {
        console.log("서버로부터 온 상대방 정보:", data);
        opponentInfoRef.current.loginId = data.loginId;
        opponentInfoRef.current.nickname = data.nickname;
        opponentInfoRef.current.country = data.country;
        opponentInfoRef.current.interests = data.interests;
        console.log("opponentInfoRef.current.", opponentInfoRef.current);
        await getMedia();
        await makeConnection();
        const message = {
          nickname: userInfoRef.current.nickname,
          country: userInfoRef.current.country,
          interests: userInfoRef.current.interests,
        };
        // console.log("message", message);
        try {
          if (socketRef.current) {
            socketRef.current.emit("answerUserInfo", message);
            console.log("앤서유저정보 주기");
          }
        } catch (error) {
          // setLocalDescription()에서 발생한 오류 처리
          console.error("Error answerUserInfo:", error);
        }
      });

      socketRef.current.on("answerUserInfo", async (data: any) => {
        // onModalTextChangeHandler();
        await getMedia();
        await makeConnection();
        console.log("서버로부터 온 상대방 정보:", data);
        opponentInfoRef.current.loginId = data.loginId;
        opponentInfoRef.current.nickname = data.nickname;
        opponentInfoRef.current.country = data.country;
        opponentInfoRef.current.interests = data.interests;
        console.log("opponentInfoRef.current.", opponentInfoRef.current);
        if (myPeerRef.current && socketRef.current) {
          try {
            const offer = await myPeerRef.current.createOffer();
            await myPeerRef.current.setLocalDescription(offer);
            socketRef.current.emit("offer", offer);
            onModalTextChangeHandler();
            // console.log("myPeerRef.current.LocalDescription", myPeerRef.current.localDescription);
          } catch (e) {
            console.log("오퍼", e);
          }
        }
      });
      socketRef.current.on("offer", async (data: any) => {
        onModalTextChangeHandler();
        if (myPeerRef.current && socketRef.current) {
          try {
            console.log("서버로부터 메시지 offer 수신 : ", data);
            await myPeerRef.current.setRemoteDescription(data);
            const answer = await myPeerRef.current.createAnswer();
            await myPeerRef.current.setLocalDescription(answer);
            socketRef.current.emit("answer", answer);
            // console.log("myPeerRef.current.LocalDescription", myPeerRef.current.localDescription);
            // console.log("myPeerRef.current.remoteDescription", myPeerRef.current.remoteDescription);
          } catch (e) {
            console.log("오퍼받음", e);
          }
        }
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
        isStartedMatchSystem();
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

  if (socketRef.current) {
    socketRef.current.on("end", () => {
      console.log("통화종료!");
      if (myPeerRef.current) {
        // await myPeerRef.current.removeTrack(senderRef.current);
        myPeerRef.current.close();
      }
    });
  }
  async function makeConnection() {
    console.log("메이크 커넥션");
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
          // senderRef.current = myPeerRef.current.addTrack(track, mediaStream);
          myPeerRef.current.addTrack(track, mediaStream);
        }
      });
      // console.log("mediaStream", mediaStream);
    } else {
      console.log("Stream is null");
    }
  }

  function handleIce(data: any) {
    if (socketRef.current) socketRef.current.emit("ice", data.candidate);
    else {
      console.log("handleIce 실패");
    }
  }

  async function handleAddStream(data: any) {
    if (data.stream && PeerFaceRef.current) {
      PeerFaceRef.current.srcObject = await data.stream;
    } else {
      console.log("Peer's Stream is not available in the data.");
    }
  }

  const onClickEndCalling = () => {
    if (socketRef.current) {
      const message = "나가기 버튼 누름!";
      if (myPeerRef.current) {
        // if (myPeerRef.current && senderRef.current) {
        // myPeerRef.current.removeTrack(senderRef.current);
        myPeerRef.current.close();
      }
      socketRef.current.emit("end", message);
      navigate("/dashboard");
    }
  };

  const onClickcloseMatchingModal = () => {
    setIsMatchingModalOpen(false);
    navigate("/dashboard");
  };

  return (
    <>
      {isMatchingModalOpen && (
        <M.Wrap>
          <S.MatchingContainer>
            <div hidden={isCallHidden}>
              <h2>매칭완료</h2>
              <p>잠시 후 상대방과 연결됩니다.</p>
            </div>
            <div hidden={isWelcomeHidden}>
              <h2>매칭 중입니다</h2>
              <p>나와 관심사가 비슷한 친구와 매칭을 시도하고 있어요!</p>
            </div>
            <S.MatchingSpinnerBox>
              <SpinnerImage style={{ width: "65px", height: "65px" }} src={spinPath} alt="spin" />
            </S.MatchingSpinnerBox>
            <S.MatchingBtn onClick={onClickcloseMatchingModal}>취소</S.MatchingBtn>
          </S.MatchingContainer>
        </M.Wrap>
      )}
      <S.MediaBox>
        <div style={{ display: "flex", gap: "20px" }}>
          <S.CallingTextGroup>
            <h4>{opponentInfoRef.current.country}에 거주중인</h4>
            <h2>{opponentInfoRef.current.nickname} 님과 통화 중</h2>
          </S.CallingTextGroup>
          <S.CallTimer>00:00:00</S.CallTimer>
        </div>
        <S.VideoWrapper>
          <S.VideoContainer>
            <S.WithVedioTag>
              <S.VideoBox>
                <video id="myFace" ref={myVideoRef} autoPlay playsInline muted />
                <h4>{userInfoRef.current.nickname}(나)</h4>
              </S.VideoBox>
            </S.WithVedioTag>
          </S.VideoContainer>
          <S.WithVedioTag>
            <S.VideoBox>
              <video id="PeerFace" ref={PeerFaceRef} autoPlay playsInline />
              <h4>{opponentInfoRef.current.nickname}(상태방)</h4>
            </S.VideoBox>
          </S.WithVedioTag>
        </S.VideoWrapper>
        <S.ButtonGroup>
          <div style={{ display: "flex", gap: "10px" }}>
            <S.ButtonStyle onClick={onClickCameraOffHandler}>
              {isCameraOn ? (
                <div>
                  <S.ButtonInnerStyle>
                    <BsFillCameraVideoOffFill size={4.5 * 4.5} />
                    <p>비디오 끄기</p>
                  </S.ButtonInnerStyle>
                </div>
              ) : (
                <div>
                  <S.ButtonInnerStyle>
                    <BsFillCameraVideoFill size={4.5 * 4.5} />
                    <p>비디오 켜기</p>
                  </S.ButtonInnerStyle>
                </div>
              )}
            </S.ButtonStyle>
            <S.ButtonStyle onClick={onClickAudioOffHandler}>
              {isAudioOn ? (
                <div>
                  <S.ButtonInnerStyle>
                    <BsFillMicMuteFill size={4.5 * 4.5} />
                    <p>마이크 끄기</p>
                  </S.ButtonInnerStyle>
                </div>
              ) : (
                <div>
                  <S.ButtonInnerStyle>
                    <BsFillMicFill size={4.5 * 4.5} />
                    <p>마이크 켜기</p>
                  </S.ButtonInnerStyle>
                </div>
              )}
            </S.ButtonStyle>
            <S.ButtonStyle>
              <S.ButtonInnerStyle>
                <BsFillXOctagonFill size={4.5 * 4.5} />
                <p>신고하기</p>
              </S.ButtonInnerStyle>
            </S.ButtonStyle>
          </div>
          <S.ButtonStyle onClick={onClickEndCalling}>
            <S.ButtonInnerStyle>
              <BsBoxArrowRight size={4.5 * 4.5} />
              <p>나가기</p>
            </S.ButtonInnerStyle>
          </S.ButtonStyle>
        </S.ButtonGroup>
      </S.MediaBox>
    </>
  );
};

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerImage = styled.img`
  width: 50px;
  height: 50px;
  animation: ${rotateAnimation} 1s linear infinite; // 회전 애니메이션 적용
`;

export default Video;
