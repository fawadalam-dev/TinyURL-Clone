function Bodypt3() {
  return (
    <>
      <div className="h-[480px] m-0 flex bg-[#0d7693] justify-evenly">
        <div>
          <video width="640" height="480px" autoPlay loop muted>
            <source src="/bodypt3-v1.mp4" type="video/mp4" />
            Video +_+
          </video>
        </div>
        <div className="m-20">
          <h2 className="text-[26px] font-bold text-white">
            Link Shortening Done Quick <br /> and Easy
          </h2>
          <p className="text-base font-medium text-white mt-5 leading-[24px]">
            Our URL shortener is not only among the first-ever link <br />
            shorteners on the Internet — it's the best out there.
          </p>
          <p className="text-base font-medium text-white mt-5 leading-[24px]">
            Shorten links for social media, blogs, SMS, emails, ads, and <br />
            almost anything both off- and online.
          </p>
          <p className="text-base font-medium text-white mt-5 leading-[24px]">
            Wave goodbye to long, clunky links and give your audiences <br />
            the experiences they deserve!
          </p>

          <div className="mt-[25px] flex">
            <button className="text-base h-10 w-[6.8rem] border-none rounded bg-[#dee2e6] mr-[1.2rem] font-medium hover:bg-[#dee2e6bb] transition-all duration-200 cursor-pointer" type="submit">
              View Plans
            </button>
            <button className="text-base h-10 w-[8.5rem] border-none rounded bg-[#002342] text-white font-medium hover:bg-[#212529] transition-all duration-200 cursor-pointer" type="submit">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bodypt3;
