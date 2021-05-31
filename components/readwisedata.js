import { useState, useEffect } from "react"

import Link from "next/link"
import { device } from "@/components/device"

const Readwisedata = ({ book, highlights, highlightIDs, path }) => {
  const [open, setOpen] = useState(false)

  const pathID = path.split("#")[1]

  useEffect(() => {
    if (highlightIDs.toString().includes(pathID)) {
      setOpen(true)
    }
  }, [])

  const title = book.title
  const author = book.author
  const sourceLink = book.source_url
  const highlightsNum = book.num_highlights

  return (
    <div className={`${open ? "item-container" : "item-container closed"}`}>
      <div className="chevron-line-container">
        <svg
          className={`${open ? "chevron" : "chevron rotated"}`}
          onClick={() => {
            setOpen(!open)
          }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2338 4H3.76619C2.9889 4 2.50878 4.84797 2.9087 5.5145L7.14251 12.5708C7.53091 13.2182 8.46909 13.2182 8.85749 12.5708L13.0913 5.5145C13.4912 4.84797 13.0111 4 12.2338 4Z"
            fill="var(--accent-100)"
          />
        </svg>

        <div className={`${open ? "line" : "line closed"}`} />
      </div>

      <div className="content-container">
        <div className="metadata">
          <a className="title" href={sourceLink} rel="noopener noreferrer">
            {title}
          </a>
          <p className="author">{author}</p>

          <p className="highlights-num">{`${highlightsNum} highlights`}</p>
        </div>
        {highlights.map((item, highlight) => {
          const highlightID = highlightIDs[highlight]
          const text = highlights[highlight]

          return (
            <div
              className={`${
                open ? "highlight-container" : "highlight-container closed"
              }`}
            >
              <Link href={`/highlights#${highlightID}`} passhref>
                <svg
                  onClick={() => {
                    console.log("test")
                  }}
                  className="link-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.1913 4.81535C16.1113 2.90791 19.2009 2.90791 21.1209 4.81535L21.1232 4.81766C22.0793 5.77381 22.5561 7.03199 22.5561 8.28477C22.5561 9.53755 22.0793 10.7957 21.1232 11.7519L18.7503 14.1248C18.3598 14.5153 17.7266 14.5153 17.3361 14.1248C16.9455 13.7343 16.9455 13.1011 17.3361 12.7106L19.709 10.3377C20.2728 9.77381 20.5561 9.03199 20.5561 8.28477C20.5561 7.53806 20.2732 6.79674 19.7101 6.23304C18.5705 5.10214 16.7421 5.10201 15.6024 6.23265L11.9228 9.92228C11.3528 10.4848 11.0703 11.2242 11.0703 11.9706C11.0703 12.105 11.0805 12.2405 11.0992 12.3875C11.1103 12.4329 11.1159 12.4687 11.119 12.4904C11.1207 12.5022 11.1221 12.5134 11.1233 12.5242C11.1527 12.6605 11.1865 12.7806 11.2286 12.8949C11.2322 12.9047 11.2357 12.9145 11.239 12.9244C11.3695 13.3161 11.595 13.6886 11.9192 14.0054L11.9274 14.0134C12.0948 14.1809 12.2709 14.3188 12.4448 14.4231C12.9184 14.7073 13.0719 15.3215 12.7878 15.7951C12.5036 16.2687 11.8894 16.4222 11.4158 16.1381C11.0912 15.9434 10.7888 15.7027 10.5173 15.4318C9.96754 14.8933 9.5761 14.2526 9.34655 13.5715C9.25765 13.3275 9.19648 13.0905 9.14972 12.8567C9.14806 12.8484 9.1465 12.84 9.14505 12.8317C9.13909 12.8054 9.13419 12.7788 9.13036 12.752C9.09595 12.5112 9.07031 12.2517 9.07031 11.9706C9.07031 10.718 9.54699 9.4584 10.5154 8.50125L14.1913 4.81535ZM9.13031 12.6606C9.13031 12.6628 9.13031 12.665 9.13033 12.6673L9.13031 12.6606Z"
                    fill="var(--accent-100)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.446 10.8531C12.7302 10.3795 13.3444 10.2259 13.818 10.5101C14.1426 10.7048 14.445 10.9455 14.7166 11.2164C15.2663 11.755 15.6577 12.3956 15.8873 13.0767C15.9762 13.3207 16.0373 13.5577 16.0841 13.7915C16.0857 13.7998 16.0873 13.8082 16.0888 13.8165C16.0947 13.8428 16.0996 13.8694 16.1034 13.8962C16.1379 14.137 16.1635 14.3965 16.1635 14.6776C16.1635 15.9301 15.6868 17.1898 14.7184 18.1469L11.0425 21.8328C9.12254 23.7403 6.03293 23.7403 4.11295 21.8328L4.11062 21.8305C3.15447 20.8744 2.67773 19.6162 2.67773 18.3634C2.67773 17.1106 3.15447 15.8524 4.11062 14.8963L6.48352 12.5234C6.87405 12.1329 7.50721 12.1329 7.89774 12.5234C8.28826 12.9139 8.28826 13.5471 7.89774 13.9376L5.52484 16.3105C4.96099 16.8744 4.67773 17.6162 4.67773 18.3634C4.67773 19.1101 4.9606 19.8514 5.52368 20.4151C6.66327 21.546 8.49168 21.5462 9.63141 20.4155L9.63295 20.414L12.5025 17.5344L13.311 16.7259C13.881 16.1633 14.1635 15.424 14.1635 14.6776C14.1635 14.5432 14.1532 14.4077 14.1346 14.2607C14.1234 14.2153 14.1179 14.1795 14.1148 14.1578C14.1131 14.146 14.1117 14.1348 14.1105 14.124C14.0811 13.9877 14.0473 13.8676 14.0052 13.7533C14.0016 13.7435 13.9981 13.7337 13.9948 13.7238C13.8642 13.3321 13.6387 12.9596 13.3146 12.6428L13.3063 12.6348C13.1389 12.4673 12.9628 12.3294 12.789 12.2251C12.3154 11.9409 12.1619 11.3267 12.446 10.8531ZM16.1035 13.9876C16.1035 13.9854 16.1035 13.9832 16.1035 13.9809V13.9876Z"
                    fill="var(--accent-100)"
                  />
                </svg>
              </Link>

              <p id={highlightID} name={highlightID} className="highlight">
                {text}
              </p>
            </div>
          )
        })}
      </div>
      <style jsx>{`
        .item-container {
          display: flex;
          flex-direction: row;
          margin-bottom: 2rem;
        }

        .item-container.closed {
          margin-bottom: 0.5rem;
        }

        @media only screen and (min-width: 768px) {
          .item-container {
            margin-bottom: 1rem;
          }
        }

        .chevron-line-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          flex-shrink: 0;
          margin-right: 1rem;
          padding-top: 0.25rem;
        }

        .chevron {
          margin-bottom: 0.5rem;
          flex-shrink: 0;
          transition: all 200ms ease-in-out;
        }

        .chevron:hover {
          cursor: pointer;
        }

        .chevron.rotated {
          transform: rotate(-90deg);
        }

        @media only screen and (min-width: 768px) {
          .chevron {
            margin-bottom: 0.25rem;
          }
          .chevron-line-container {
            margin-right: 0.5rem;
          }
        }

        .metadata {
          display: flex;
          flex-direction: column;
          margin-bottom: 0.5rem;
        }

        .line {
          background-color: var(--primary-200);
          width: 2px;
          height: 100%;
        }

        .line.closed {
          display: none;
        }

        .title {
          font-size: var(--h3);
          font-weight: bold;
        }

        .author {
        }

        .date {
          display: none;
          font-size: var(--small);
          color: var(--accent-100);
        }

        .highlights-num {
          font-size: var(--small);
          color: var(--accent-100);
        }

        .highlight-container {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          margin-left: -2.125rem;
          opacity: 1;
          height: auto;
        }

        .highlight-container.closed {
          opacity: 0;
          height: 0;
        }

        .highlight-container:hover > .link-icon {
          visibility: visible;
        }

        .highlight-container:last-of-type > p {
          margin-bottom: 0;
        }

        .link-icon {
          flex-shrink: 0;
          padding: 0.125rem;
          margin-right: 0.875rem;
          margin-top: 0.15rem;
          visibility: hidden;
        }

        .link-icon:hover {
          cursor: pointer;
        }

        .highlight {
          margin-bottom: 1.5rem;
          scroll-margin-top: 4em;
        }

        @media ${device.desktop} {
          .highlight-container {
            margin-left: -1.125rem;
          }

          .highlight {
            margin-bottom: 0.75rem;
            scroll-margin-top: 4em;
          }

          .link-icon {
            margin-right: 0.375rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Readwisedata
