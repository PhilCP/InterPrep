import InterviewCard from '@/components/InterviewCard';
import { Button } from '@/components/ui/button';
import { dummyInterviews } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page =() => {
  return (
    <>
    <section className="card-cta">
      <div className="flex flex-col gap-6 max-w-lg">
        <h2>Get Interview-Ready with AI-Powered Practice & instant Feedback</h2>

        <p className="tyext-lg">
          Elevate your interview skills with InterPrep. Practice with AI-driven mock interviews and receive instant, personalized feedback to help you succeed.
        </p>

        <Button asChild className="btn-primary max-sm:w-full">
          <Link href="/interview">Start an interview</Link>
        </Button>

      </div>
      <Image src="/robot.png" 
      alt="Robot-dude" 
      width={400} height={300} 
      className="max-sm:hidden" />

    </section>
    <section className="flex flex-col gap-6 mt-8">
      <h2>Your Interviews</h2>
      <div className="interviews-section">
        {dummyInterviews.map((interview) => (
        <InterviewCard {... interview} key={interview.id}/>
        ))}

      </div>

    </section>
    <section className="flex flex-col gap-6 mt-8">
      <h2>Take an Interview</h2>
      <div className="interviews-section">
        {dummyInterviews.map((interview) => (
        <InterviewCard {... interview} key={interview.id} />
        ))}
        {/* <p>You haven&apos;t taken any interviews yet. Start one now to improve your skills!</p> */}
      </div>
    </section>
    </>
  );
};

export default Page;