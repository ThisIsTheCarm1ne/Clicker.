import React from "react";

import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";

import { redirect } from 'next/navigation';
import { cookies } from "next/headers";

export default function SignIn() {

  return (
    <form
      action={async () => {
        "use server";

        const referralCode = cookies().get("referrerId")?.value || null;

        // If no refferal code - redirect back to / with error message
        if (!referralCode) {
          redirect("/?error=Referral code is required");
        };

        await signIn("github");
      }}
    >
      <Button type="submit" className="flex items-center gap-2 py-4 text-lg">
        Signin with GitHub
        <svg width="26" height="26" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M63.9998 5.10303C30.6528 5.10303 3.61182 32.138 3.61182 65.491C3.61182 92.173 20.9148 114.808 44.9088 122.794C47.9258 123.354 49.0338 121.484 49.0338 119.889C49.0338 118.449 48.9778 113.692 48.9518 108.646C32.1518 112.299 28.6068 101.521 28.6068 101.521C25.8598 94.541 21.9018 92.685 21.9018 92.685C16.4218 88.937 22.3148 89.015 22.3148 89.015C28.3778 89.44 31.5718 95.238 31.5718 95.238C36.9578 104.468 45.6988 101.8 49.1448 100.258C49.6868 96.355 51.2518 93.69 52.9788 92.182C39.5658 90.657 25.4648 85.478 25.4648 62.339C25.4648 55.746 27.8248 50.359 31.6878 46.129C31.0598 44.609 28.9928 38.467 32.2718 30.149C32.2718 30.149 37.3418 28.526 48.8818 36.339C53.6998 35 58.8668 34.327 63.9998 34.304C69.1298 34.327 74.2998 34.998 79.1268 36.337C90.6528 28.524 95.7168 30.147 95.7168 30.147C99.0038 38.464 96.9368 44.607 96.3098 46.127C100.182 50.357 102.525 55.744 102.525 62.337C102.525 85.531 88.3978 90.637 74.9508 92.133C77.1178 94.007 79.0478 97.683 79.0478 103.316C79.0478 111.396 78.9778 117.899 78.9778 119.888C78.9778 121.495 80.0658 123.378 83.1258 122.785C107.106 114.791 124.389 92.163 124.389 65.491C124.388 32.14 97.3498 5.10403 63.9998 5.10403V5.10303Z" fill="white"/>
          <path d="M26.4836 91.8059C26.3506 92.1059 25.8786 92.1959 25.4486 91.9909C25.0086 91.7949 24.7636 91.3859 24.9056 91.0849C25.0356 90.7749 25.5086 90.6899 25.9456 90.8969C26.3856 91.0939 26.6356 91.5069 26.4826 91.8069L26.4836 91.8059ZM28.9296 94.5349C28.6426 94.8019 28.0796 94.6779 27.6976 94.2549C27.3016 93.8349 27.2276 93.2719 27.5206 93.0009C27.8186 92.7349 28.3646 92.8609 28.7606 93.2809C29.1546 93.7069 29.2326 94.2649 28.9306 94.5359L28.9296 94.5349ZM31.3116 98.0119C30.9416 98.2699 30.3356 98.0289 29.9616 97.4919C29.5916 96.9539 29.5916 96.3089 29.9716 96.0519C30.3446 95.7939 30.9416 96.0269 31.3216 96.5589C31.6896 97.1039 31.6896 97.7489 31.3116 98.0109V98.0119ZM34.5726 101.373C34.2426 101.738 33.5366 101.64 33.0206 101.143C32.4936 100.656 32.3466 99.9629 32.6776 99.5989C33.0136 99.2329 33.7226 99.3349 34.2416 99.8289C34.7686 100.315 34.9276 101.009 34.5746 101.372L34.5726 101.373ZM39.0726 103.324C38.9256 103.797 38.2476 104.012 37.5626 103.81C36.8796 103.603 36.4326 103.05 36.5726 102.572C36.7126 102.095 37.3956 101.872 38.0846 102.087C38.7676 102.293 39.2146 102.843 39.0726 103.324ZM44.0156 103.685C44.0326 104.183 43.4526 104.595 42.7356 104.605C42.0126 104.622 41.4276 104.218 41.4206 103.728C41.4206 103.225 41.9886 102.818 42.7106 102.804C43.4276 102.791 44.0166 103.191 44.0166 103.684L44.0156 103.685ZM48.6136 102.903C48.6996 103.388 48.2006 103.887 47.4876 104.02C46.7876 104.15 46.1376 103.848 46.0476 103.367C45.9616 102.869 46.4696 102.37 47.1696 102.241C47.8836 102.118 48.5236 102.411 48.6136 102.904V102.903Z" fill="white"/>
        </svg>
      </Button>
    </form>
  )
} 
