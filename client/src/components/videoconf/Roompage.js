import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Roompage = () => {
  const { roomid } = useParams();
  const meetingRef = useRef();

  useEffect(() => {
    const mymeeting = async (element) => {
      const appId = 330352337;
      const serverSecret = "08a79252b5da8661460608806dfc7b53";
      const kittoken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appId, serverSecret, roomid, Date.now().toString(), "Mridul"
      );
      const zp = ZegoUIKitPrebuilt.create(kittoken);
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference
        }
      });
    };

    mymeeting(meetingRef.current);
  }, [roomid]);

  return (
    <div>
      <div ref={meetingRef} />
    </div>
  );
};

export default Roompage;
