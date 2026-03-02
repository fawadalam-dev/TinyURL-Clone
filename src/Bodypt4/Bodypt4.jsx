function Bodypt4() {
  return (
    <div className="bg-[#0b1f3c] text-white w-full p-0">
      <div className="max-w-[1200px] w-full mx-auto p-[0_5%] flex items-stretch min-h-[420px]">
        <div className="p-[40px_8%_40px_0] flex items-start flex-1 box-border">
          <div className="max-w-[600px] w-full">
            <h2 className="text-2xl font-black leading-[1.25] mt-0 mb-[25px]">
              Transforming the Digital
              <br />
              Landscape Since '02
            </h2>
            <p className="text-[1.05rem] leading-[1.6] mt-0 mb-[50px] font-light">
              TinyURL has created billions of short links for marketers, <br />
              influencers, small business owners, and large businesses.
            </p>

            <div className="flex flex-col gap-[30px]">
              <div className="grid grid-cols-[240px_1fr] items-center">
                <span className="text-[1.7rem] font-black block">Billions</span>
                <span className="text-[1.05rem] font-light block">of redirects per month</span>
              </div>
              <div className="grid grid-cols-[240px_1fr] items-center">
                <span className="text-[1.7rem] font-black block">24 years</span>
                <span className="text-[1.05rem] font-light block">of shortening URLs</span>
              </div>
              <div className="grid grid-cols-[240px_1fr] items-center">
                <span className="text-[1.7rem] font-black block">39,887,857,114</span>
                <span className="text-[1.05rem] font-light block">TinyURLs created</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden">
          <video
            src="/bodypt4-v1.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover block"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Bodypt4;
