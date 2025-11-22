import Image from "next/image";
import { cn } from "@/lib/utils";

interface AgentProps {
  userName: string;
}

enum CallStatus {
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
  CONNECTING = "CONNECTING",
  FINISHED = "FINISHED",
}

const Agent = ({ userName }: AgentProps) => {
  const callStatus = CallStatus.FINISHED; // Example status
  const isSpeaking = true;
  const messages = [
    'Hello, how can I assist you today?',
    'I would like to practice for an interview.',
  ];
  const lastMessage = messages[messages.length - 1];

  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>

        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="user avatar"
              width={120}
              height={120}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      {messages.length > 0 && (
        <div className="transcript-border">
            <div className="transcript">
                <p key={lastMessage} className={cn
                    ('transiton-opacity duration-500 opacity-0, animate-fade-in opacity-100')}>
                    {lastMessage}

                </p>

            </div>

        </div>
      )}

      <div className="w-full flex justify-center mt-4">
        {callStatus !== CallStatus.ACTIVE ? (
          <button className="relative btn-call">
            {/* Ping animation, only visible when CONNECTING */}
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== CallStatus.CONNECTING && "hidden"
              )}
            />

            <span>
              {callStatus === CallStatus.INACTIVE ||
              callStatus === CallStatus.FINISHED
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect">Disconnect</button>
        )}
      </div>
    </>
  );
};

export default Agent;
