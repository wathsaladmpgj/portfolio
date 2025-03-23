import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import Card from "../components/ProjectCard";


const Pricing = () => {
    return (
      <>
      <Header />
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
  
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Choose the right plan for you
          </p>
        </div>
  
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
  
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-2">
          {/* Hobby Plan */}
          <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:p-10">
            <h3 className="text-base/7 font-semibold text-indigo-600">Hobby</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-gray-900">$29</span>
              <span className="text-base text-gray-500">/month</span>
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              The perfect plan if you're just getting started with our product.
            </p>
  
            <ul className="mt-8 space-y-3 text-sm text-gray-600">
              <li>✅ 25 products</li>
              <li>✅ Up to 10,000 subscribers</li>
              <li>✅ Advanced analytics</li>
              <li>✅ 24-hour support response time</li>
            </ul>
  
            <a href="#" className="mt-8 block rounded-md px-4 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-indigo-200 hover:ring-indigo-300">
              Get started today
            </a>
          </div>
  
          {/* Enterprise Plan */}
          <div className="relative rounded-3xl bg-gray-900 p-8 ring-1 shadow-2xl sm:p-10">
            <h3 className="text-base/7 font-semibold text-indigo-400">Enterprise</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-white">$99</span>
              <span className="text-base text-gray-400">/month</span>
            </p>
            <p className="mt-6 text-base/7 text-gray-300">
              Dedicated support and infrastructure for your company.
            </p>
  
            <ul className="mt-8 space-y-3 text-sm text-gray-300">
              <li>✅ Unlimited products</li>
              <li>✅ Unlimited subscribers</li>
              <li>✅ Advanced analytics</li>
              <li>✅ Priority 24/7 support</li>
            </ul>
  
            <a href="#" className="mt-8 block rounded-md px-4 py-2.5 text-center text-sm font-semibold text-indigo-400 ring-1 ring-indigo-500 hover:ring-indigo-300">
              Get started today
            </a>
          </div>
        </div>
     
      </div>

      <div className="p-8 flex items-center gap-5 justify-center bg-gray-100">
            <Card 
                title="Premium Plan" 
                description="Get access to all premium features with our advanced plan."
                price ="$60"
            />
            <Card 
                title="Pro Plan" 
                description="Get access to all premium features with our advanced plan."
                price ="$100"
            />
            <Card 
                title="Basic Plan" 
                description="Get access to all premium features with our advanced plan."
                price="$80"
            />
        </div>
      <Footer />
      </>
    );
  };
  
  export default Pricing;
  