import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container mt-5">
            <h2 className='text-info mb-3 pb-5'>My Three Blogs</h2>
            <div style={{border:'3px solid yellow'}} className='p-5 m-3'>
            <h4>1. Difference between authorization and authentication</h4>
            <p>Authentication হল কেউ কে তা যাচাই করার প্রক্রিয়া, যেখানে অনুমোদন হল ব্যবহারকারীর কোন নির্দিষ্ট অ্যাপ্লিকেশন, ফাইল এবং ডেটাতে অ্যাক্সেস রয়েছে তা যাচাই করার প্রক্রিয়া। পরিস্থিতি এমন একটি এয়ারলাইনের মতো যা নির্ধারণ করতে হবে কোন লোক বোর্ডে আসতে পারে। প্রথম ধাপ হল একজন যাত্রীর পরিচয় নিশ্চিত করা যাতে তারা কে বলে তারা তা নিশ্চিত করা। একবার একজন যাত্রীর পরিচয় নির্ণয় করা হয়ে গেলে, দ্বিতীয় ধাপে যাত্রীর অ্যাক্সেস আছে এমন কোনো বিশেষ পরিষেবা যাচাই করা হচ্ছে, তা সে ফার্স্ট-ক্লাস ফ্লাইং হোক বা ভিআইপি লাউঞ্জে যাওয়া হোক।</p>
            </div>
            <div style={{border:'3px solid yellow'}} className='p-5 m-3' >
            <h4>2.Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>Firebase প্রমাণীকরণ ব্যাকএন্ড পরিষেবা, সহজে ব্যবহারযোগ্য SDK, এবং আপনার অ্যাপে ব্যবহারকারীদের প্রমাণীকরণের জন্য তৈরি UI লাইব্রেরি প্রদান করে। এটি পাসওয়ার্ড, ফোন নম্বর, Google, Facebook এবং Twitter এর মতো জনপ্রিয় ফেডারেটেড পরিচয় প্রদানকারী এবং আরও অনেক কিছু ব্যবহার করে প্রমাণীকরণ সমর্থন করে।</p>
            </div>
            <div style={{border:'3px solid yellow'}} className='p-5 m-3'>
            <h4>3.What other services does firebase provide other than authentication</h4>
            <p>ফায়ারবেসের মূল বৈশিষ্ট্যগুলির মধ্যে রয়েছে NoSQL ডাটাবেস, রিয়েল-টাইম কোয়েরি, স্কেলেবল হোস্টিং, ফাইল স্টোরেজ, REST API, প্রমাণীকরণ এবং বিশ্লেষণ।</p>
            </div>  
            </div>
        </div>
    );
};

export default Blog;