import React from "react";
import Rectangle1 from "../Images/Rectangle1.png";
import Vector1 from "../Images/Vector1.png";
import image897 from "../Images/image897.png";
import image898 from "../Images/image898.png";
import image899 from "../Images/image899.png";
import image900 from "../Images/image900.png";
import image901 from "../Images/image901.png";
import image902 from "../Images/image902.png";
import Ellipse1238 from "../Images/Ellipse1238.png";
import Vector735 from "../Images/Vector735.png";
import Vector739 from "../Images/Vector739.png";
import Vector741 from "../Images/Vector741.png";
import Vector743 from "../Images/Vector743.png";
import Vector747 from "../Images/Vector747.png";
import Vector745 from "../Images/Vector745.png";
import Vector749 from "../Images/Vector749.png";
import Vector750 from "../Images/Vector750.png";
import { CgNotes } from "react-icons/cg";
const Daina = () => {
  return (
    <div>
      <div style={{ width: "87px", height: "500px", borderColor: "#ECECEC" }}>
        <div>
          <img src={Rectangle1} alt="" style={{ position: "relative" }} />
          <div>
            <img
              src={Vector1}
              alt=""
              style={{
                position: "absolute",
                marginTop: "-3%",
                marginLeft: "14px",
              }}
            />
          </div>
        </div>

        <div style={{ marginLeft: "25px", marginTop: "20px" }}>
          <i className="fa-solid fa-plus add-icon"></i>
          <div
            style={{
              marginLeft: "-2px",
              color: "rgba(0, 0, 0, 0.3)",
            }}
          >
            New
          </div>
        </div>
        <div style={{ marginLeft: "25px", marginTop: "40px" }} s>
          <img src={image897} alt="" style={{ fontSize: "20PX" }} />
          <div style={{ marginLeft: "-15px", color: "rgba(0, 0, 0, 0.3)" }}>
            PATAINT
          </div>
        </div>
        <div style={{ marginLeft: "25px", marginTop: "40px" }} s>
          <img src={image898} alt="" style={{ fontSize: "20PX" }} />
          <div style={{ marginLeft: "-15px", color: "rgba(0, 0, 0, 0.3)" }}>
            FOLDER
          </div>
        </div>
        <div style={{ marginLeft: "25px", marginTop: "40px" }} s>
          <img src={image899} alt="" style={{ fontSize: "20PX" }} />
          <div style={{ marginLeft: "-15px", color: "rgba(0, 0, 0, 0.3)" }}>
            UPLOAD
          </div>
        </div>
        <div style={{ marginLeft: "25px", marginTop: "40px" }} s>
          <img src={image900} alt="" style={{ fontSize: "20PX" }} />
          <div style={{ marginLeft: "-15px", color: "rgba(0, 0, 0, 0.3)" }}>
            REPORT
          </div>
        </div>
        <div style={{ marginLeft: "25px", marginTop: "40px" }} s>
          <img src={image901} alt="" style={{ fontSize: "20PX" }} />
          <div style={{ marginLeft: "-15px", color: "rgba(0, 0, 0, 0.3)" }}>
            SETTING
          </div>
        </div>
        <div style={{ marginLeft: "25px", marginTop: "40px" }} s>
          <img src={image902} alt="" style={{ fontSize: "20PX" }} />
          <div style={{ marginLeft: "-15px", color: "rgba(0, 0, 0, 0.3)" }}>
            LOGOUT
          </div>
        </div>
      </div>
      <div
        style={{
          width: "266px",
          height: "500px",

          marginLeft: "10%",
          marginTop: "-31%",
        }}
      >
        <img src={Ellipse1238} alt="" style={{ marginLeft: "34px" }} />
        <div style={{ fontSize: "30px", fontWeight: "700" }}>Diane Cooper</div>
        <div style={{ fontSize: "15px", color: "#6B6B6B" }}>
          diane.cooper@example.com
        </div>
        <div className="profile-div">
          <div>
            <div style={{ fontSize: "20px", fontWeight: "400" }}>15</div>
            <div style={{ marginLeft: "-4px", color: "#6B6B6B" }}>Past </div>
          </div>
          <div>
            <img src={Vector735} alt="" />
          </div>
          <div>
            <div style={{ fontSize: "20px", fontWeight: "400" }}>02</div>
            <div
              style={{
                marginLeft: "-23px",
                color: "#6B6B6B",
              }}
            >
              Upcoming{" "}
            </div>
          </div>
        </div>

        <div>
          <button className="send-btn">Send Message</button>
        </div>
        <div className="file-doc">Files / Documents</div>
        <div>
          <div className="pdf-icon">
            <i
              class="fa-sharp fa-regular fa-file-lines"
              style={{ marginTop: "15px" }}
            ></i>
            <div
              style={{
                marginTop: "14px",
                fontSize: "13px",
                marginLeft: "-33px",
              }}
            >
              Check Up Results.pdf
            </div>
          </div>
          <div className="pdf-icon" style={{ marginTop: "2%" }}>
            <i
              className="fa-sharp fa-regular fa-file-lines"
              style={{ marginTop: "15px" }}
            ></i>
            <div
              style={{
                marginTop: "14px",
                fontSize: "13px",
                marginLeft: "-33px",
              }}
            >
              Check Up Results.pdf
            </div>
          </div>
          <div className="pdf-icon" style={{ marginTop: "2%" }}>
            <i
              class="fa-sharp fa-regular fa-file-lines"
              style={{ marginTop: "15px" }}
            ></i>
            <div
              style={{
                marginTop: "14px",
                fontSize: "13px",
                marginLeft: "-33px",
              }}
            >
              Check Up Results.pdf
            </div>
          </div>
          <div className="pdf-icon" style={{ marginTop: "2%" }}>
            <i
              class="fa-sharp fa-regular fa-file-lines"
              style={{ marginTop: "15px" }}
            ></i>
            <div
              style={{
                marginTop: "14px",
                fontSize: "13px",
                marginLeft: "-33px",
              }}
            >
              Check Up Results.pdf
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "25%", marginTop: "-32%" }}>
        <div className="detail-per">
          <div>
            <div style={{ color: "#6B6B6B" }}>Gender</div>
            <div>Female</div>
          </div>
          <div>
            <div style={{ color: "#6B6B6B" }}>Birthday</div>
            <div>Feb 24th, 1997</div>
          </div>
          <div>
            <div style={{ color: "#6B6B6B" }}>Phone Number</div>
            <div>(239) 555 -0108</div>
          </div>
          <div>
            <div style={{ color: "#6B6B6B" }}>Registered Date</div>
            <div>Feb 24th, 1997</div>
          </div>
        </div>
        <div className="vector-line">
          <div>
            <img src={Vector739} alt="" style={{ marginLeft: "12%" }} />
          </div>
          <div>
            <img src={Vector741} alt="" style={{ marginLeft: "-18%" }} />
          </div>

          <div>
            <img src={Vector743} alt="" style={{ marginLeft: "-10%" }} />
          </div>
          <div>
            <img src={Vector747} alt="" />
          </div>
        </div>
        <div className="detail-per" style={{ marginTop: "2%" }}>
          <div style={{ marginLeft: "-2%" }}>
            <div style={{ color: "#6B6B6B" }}>Street Address</div>
            <div>JL. Diponegoro No. 21</div>
          </div>
          <div style={{ marginLeft: "-12%" }}>
            <div style={{ color: "#6B6B6B" }}>City</div>
            <div>Cilacap</div>
          </div>
          <div style={{ marginLeft: "2%" }}>
            <div style={{ color: "#6B6B6B" }}>Zip Code</div>
            <div>655849</div>
          </div>
          <div style={{ marginRight: "-1%" }}>
            <div style={{ color: "#6B6B6B" }}>Member Status</div>
            <div>Active Member</div>
          </div>
        </div>
        <div className="vector-line">
          <div>
            <img src={Vector739} alt="" style={{ marginLeft: "12%" }} />
          </div>
          <div>
            <img src={Vector741} alt="" style={{ marginLeft: "-18%" }} />
          </div>

          <div>
            <img src={Vector743} alt="" style={{ marginLeft: "-10%" }} />
          </div>
          <div>
            <img src={Vector747} alt="" />
          </div>
        </div>

        <div className="app-rec">
          <button className="upc-ap">Upcoming Appointment</button>
          <div style={{ marginTop: "8px" }}>Past Appointment</div>
          <div style={{ marginTop: "8px" }}>Medical Records </div>
        </div>
        <div className="last-root">
          <div className="last-cane">
            <div>
              <div>Root Canal Treatment</div>
            </div>
            <button className="show-pre">Show Previous Treatments</button>
          </div>
          <div>
            <img src={Vector745} alt="" style={{ width: "100%" }} />
          </div>
          <div className="treat-open">
            <div style={{ marginTop: "3%" }}>
              <div style={{ fontSize: "20px", fontWeight: "700" }}>
                26 Nov ‘19
              </div>
              <div style={{ color: "#6B6B6B" }}>09.00 - 10.00</div>
            </div>
            <div style={{ marginTop: "3%" }}>
              <img src={Vector749} alt="" />
            </div>
            <div style={{ marginTop: "3%" }}>
              <div style={{ color: "#6B6B6B" }}>Treatment</div>
              <div>Open Access</div>
            </div>
            <div style={{ marginTop: "3%" }}>
              <img src={Vector750} alt="" />
            </div>
            <div style={{ marginTop: "3%" }}>
              <div style={{ color: "#6B6B6B" }}>Dentist</div>
              <div>Drg. Adam H.</div>
            </div>
            <div style={{ marginTop: "3%" }}>
              <div style={{ color: "#6B6B6B" }}>Nurse</div>
              <div>Jessicamila</div>
            </div>
            <div style={{ marginTop: "1%" }} className="note-icon">
              <CgNotes style={{ color: "blue" }} />
              <div style={{ color: "blue", marginLeft: "5px" }}>Note</div>
            </div>
          </div>
          <div className="treat-open">
            <div style={{ marginTop: "3%" }}>
              <div style={{ fontSize: "20px", fontWeight: "700" }}>
                26 Nov ‘19
              </div>
              <div style={{ color: "#6B6B6B" }}>09.00 - 10.00</div>
            </div>
            <div style={{ marginTop: "3%" }}>
              <img src={Vector749} alt="" />
            </div>
            <div style={{ marginTop: "3%" }}>
              <div style={{ color: "#6B6B6B" }}>Treatment</div>
              <div>Root Canal</div>
            </div>
            <div style={{ marginTop: "3%" }}>
              <img src={Vector750} alt="" />
            </div>
            <div style={{ marginTop: "3%" }}>
              <div style={{ color: "#6B6B6B" }}>Dentist</div>
              <div>Drg. Adam H.</div>
            </div>
            <div style={{ marginTop: "3%" }}>
              <div style={{ color: "#6B6B6B" }}>Nurse</div>
              <div>Jessicamila</div>
            </div>
            <div style={{ marginTop: "1%" }} className="note-icon">
              <CgNotes style={{ color: "blue" }} />
              <div style={{ color: "blue", marginLeft: "5px" }}>Note</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daina;
