import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import "./AddToAny.css";
// import 'https://static.addtoany.com/menu/page.js'

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

const AddToAnyLinks = () => {
  useScript("https://static.addtoany.com/menu/page.js");

  return (
    <Col className="mt-5 mb-4">
      <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
        <a className="a2a_dd" href="https://www.addtoany.com/share">
          <a
            className="a2a_dd"
            href="https://www.addtoany.com/share#url=https%3A%2F%2Fwww.awesomeinc.org%2Fblog%2Fintroducing-the-fall-2021-fellowship-cohort&amp;title=Introducing%20the%20Fall%202021%20Fellowship%20Cohort%20%7C%20Awesome%20Inc"
          >
            <span
              className="a2a_svg a2a_s__default a2a_s_a2a"
              style={{ backgroundColor: "rgb(1, 102, 255)" }}
            >
              <svg
                focusable="false"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <g fill="#FFF">
                  <path d="M14 7h4v18h-4z"></path>
                  <path d="M7 14h18v4H7z"></path>
                </g>
              </svg>
            </span>
            <span className="a2a_label a2a_localize" data-a2a-localize="inner,Share">
              Share
            </span>
          </a>
        </a>

        <a
          className="a2a_button_facebook"
          // target="_blank"
          href="/#facebook"
          rel="nofollow noopener"
        >
          <span
            className="a2a_svg a2a_s__default a2a_s_facebook"
            style={{ backgroundColor: "rgb(24, 119, 242)" }}
          >
            <svg
              focusable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="#FFF"
                d="M17.78 27.5V17.008h3.522l.527-4.09h-4.05v-2.61c0-1.182.33-1.99 2.023-1.99h2.166V4.66c-.375-.05-1.66-.16-3.155-.16-3.123 0-5.26 1.905-5.26 5.405v3.016h-3.53v4.09h3.53V27.5h4.223z"
              ></path>
            </svg>
          </span>
          <span className="a2a_label">Facebook</span>
        </a>

        <a
          className="a2a_button_twitter"
          // target="_blank"
          href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.awesomeinc.org%2Fblog%2Fintroducing-the-fall-2021-fellowship-cohort&amp;linkname=Introducing%20the%20Fall%202021%20Fellowship%20Cohort%20%7C%20Awesome%20Inc&amp;linknote="
          rel="nofollow noopener"
        >
          <span
            className="a2a_svg a2a_s__default a2a_s_twitter"
            style={{ backgroundColor: "rgb(29, 155, 240)" }}
          >
            <svg
              focusable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="#FFF"
                d="M28 8.557a9.913 9.913 0 01-2.828.775 4.93 4.93 0 002.166-2.725 9.738 9.738 0 01-3.13 1.194 4.92 4.92 0 00-3.593-1.55 4.924 4.924 0 00-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.942 4.942 0 00-.665 2.477c0 1.71.87 3.214 2.19 4.1a4.968 4.968 0 01-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174-.318 0-.626-.03-.928-.086a4.935 4.935 0 004.6 3.42 9.893 9.893 0 01-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.953 13.953 0 007.55 2.213c9.056 0 14.01-7.507 14.01-14.013 0-.213-.005-.426-.015-.637.96-.695 1.795-1.56 2.455-2.55z"
              ></path>
            </svg>
          </span>
          <span className="a2a_label">Twitter</span>
        </a>
        <a
          className="a2a_button_linkedin"
          // target="_blank"
          href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fwww.awesomeinc.org%2Fblog%2Fintroducing-the-fall-2021-fellowship-cohort&amp;linkname=Introducing%20the%20Fall%202021%20Fellowship%20Cohort%20%7C%20Awesome%20Inc&amp;linknote="
          rel="nofollow noopener"
        >
          <span
            className="a2a_svg a2a_s__default a2a_s_linkedin"
            style={{ backgroundColor: "rgb(0, 123, 181)" }}
          >
            <svg
              focusable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                d="M6.227 12.61h4.19v13.48h-4.19V12.61zm2.095-6.7a2.43 2.43 0 010 4.86c-1.344 0-2.428-1.09-2.428-2.43s1.084-2.43 2.428-2.43m4.72 6.7h4.02v1.84h.058c.56-1.058 1.927-2.176 3.965-2.176 4.238 0 5.02 2.792 5.02 6.42v7.395h-4.183v-6.56c0-1.564-.03-3.574-2.178-3.574-2.18 0-2.514 1.7-2.514 3.46v6.668h-4.187V12.61z"
                fill="#FFF"
              ></path>
            </svg>
          </span>
          <span className="a2a_label">LinkedIn</span>
        </a>
      </div>
      <script type="text/javascript" async src="https://static.addtoany.com/menu/page.js"></script>
      <br></br>
    </Col>
  );
};

export default AddToAnyLinks;
