import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Roompage = () => {
  const { roomid } = useParams();
  const meetingRef = useRef();

  useEffect(() => {
    const mymeeting = async (element) => {
      const appId = 2015602674;
      const serverSecret = "8ffff975ffe69deeba2c9d0c3c78e79f";
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
    <div className="bg-slate-200 w-[80%] mx-auto my-[10rem]">
      <div ref={meetingRef} />
    </div>
  );
};

export default Roompage;
