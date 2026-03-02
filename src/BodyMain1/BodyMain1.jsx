import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faHighlighter } from "@fortawesome/free-solid-svg-icons";

function BodyMain1() {
  return (
    <div className="bg-[#002342] h-[550px] text-white py-[6.5rem] px-12 flex justify-between">
      {/* Main Body Left Part */}
      <div className="my-5 ml-[50px]">
        <div className="text-[20px] mb-[30px]">
          <h1>
            URL Shortener, Branded <br /> Short Links & Analytics
          </h1>
          <br />
        </div>

        <div className="text-[17.5px] mb-[30px]">
          <p className="mb-[25px]">
            Welcome to the original link shortener — simplifying the Internet{" "}
            <br />
            through the power of the URL since 2002.
          </p>

          <p className="mb-[25px]">
            You can use branded domains for fully custom links, track link
            analytics, <br /> and enjoy other powerful features with our paid
            plans.
          </p>
        </div>

        <div>
          <button className="text-[16px] h-10 w-[6.8rem] bg-[#dee2e6] rounded px-6 py-2.5 font-medium mr-5 hover:bg-[#dee2e6bb] transition-colors duration-200">View Plans</button>
          <button className="text-[16px] h-10 w-[11.5rem] bg-[#0d7693] text-white rounded px-6 py-2.5 font-medium hover:bg-[#07637dc5] transition-colors duration-200">Create Free Account</button>
        </div>

        {/* Main Body Bottom Part */}
        <div className="mt-[60px]">
          <h2>Your Recent Links:</h2>

          <div className="bg-white text-[#1a1a1a] flex items-center p-5 rounded h-[15px] w-[1165px] absolute mt-4 font-semibold text-[15px] shadow-md">
            <i className="fa-solid fa-circle-exclamation mr-3"></i>
            No links yet in your history
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="mr-[60px] mb-5">
        <button className="h-[50px] w-[250px] bg-[#f8f9fa] rounded-t-md font-semibold">
          <i
            className="fa-solid fa-link mr-2"
            style={{ color: "#000000" }}
          ></i>
          Shorten a Link
        </button>
        <button className="h-[50px] w-[250px] bg-[#0d7693] text-white rounded-t-md font-semibold">
          <i
            className="fa-solid fa-qrcode mr-2"
            style={{ color: "#000000" }}
          ></i>
          Generate QR Code
        </button>

        {/* Rightside Box */}
        <div className="h-[341px] w-[500px] bg-[#f8f9fa] rounded-b-md">
          <form
            className="w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Input 1 */}
            <div>
              <label className="text-black font-semibold text-[13.5px] my-[15px] ml-[22px] block" htmlFor="user-url">
                <i
                  className="fa-solid fa-location-arrow mr-2"
                  style={{ color: "#000000" }}
                ></i>
                Long URL
              </label>
              <input
                className="h-7 w-[450px] border border-black/[0.272] rounded-sm mx-0 my-1 ml-[22px] font-semibold"
                type="text"
                name="user-rule"
                id="user-url"
                placeholder="Paste your long URL here"
                required
              />
            </div>
            <div className="flex">
              <div>
                <label className="text-black font-semibold text-[13.5px] my-[15px] ml-[22px] block" htmlFor="bpr-form-select1">
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faGlobe}
                    style={{ color: "#000000" }}
                  />
                  Domain
                </label>
                <select
                  className="text-black h-[30px] w-[200px] border border-black/[0.272] rounded-sm ml-[22px] mb-3 font-medium"
                  name="bpr-form-select1"
                  id="bpr-form-select1"
                >
                  <option value="tinyurl.com">tinyurl.com</option>
                  <option value="theahsan.com">theahsan.com</option>
                </select>
              </div>
              <div>
                <label className="text-black font-semibold text-[13.5px] my-[15px] ml-[22px] block" htmlFor="alias-url">
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faHighlighter}
                    style={{ color: "#000000" }}
                  />
                  Alias (optional)
                </label>
                <input
                  className="h-[25px] w-[200px] border border-black/[0.272] rounded-sm ml-[22px] font-medium"
                  type="text"
                  name="alias-rule"
                  id="alias-url"
                  placeholder="Add alias here"
                  required
                />
                <label className="text-black text-[11.5px] italic ml-[22px] mt-2 block" htmlFor="alias-url">
                  Must be at least 5 characters
                </label>
              </div>
            </div>
          </form>
          <button type="submit" className="h-[38px] w-[458px] bg-[#1f8244] text-white rounded-sm ml-[22px] my-[35px] font-semibold text-base hover:bg-[#186334] transition-colors">
            Shorten Link
          </button>
          <p className="text-black text-[11.5px] italic ml-[22px] mt-2">
            By clicking Shorten Link, you agree with our Terms of Service,
            Privacy Policy, <br /> and Use of Cookies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodyMain1;
