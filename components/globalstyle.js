function GlobalStyle(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
        }

        html {
          scroll-behavior: smooth;
        }

        :root {
          --sp-1: 0.25rem;
          --sp-2: 0.5rem;
          --sp-3: 0.75rem;
          --sp-4: 1rem;
          --sp-5: 1.25rem;
          --sp-6: 1.5rem;
          --sp-7: 1.75rem;
          --sp-8: 2rem;

          --body: 15px;
          --small: 14px;
          --h1: 24px;
          --h2: 20px;
          --h3: 16px;

          --primary-100: rgba(255, 255, 255, 1);
          --primary-200: rgba(241, 245, 248, 1);
          --primary-300: rgba(222, 232, 242, 1);
          --primary-400: rgba(204, 219, 235, 1);

          --accent-100: rgba(144, 164, 187, 1);
          --accent-200: rgba(108, 137, 172, 1);
          --accent-300: rgba(74, 111, 156, 1);
          --accent-400: rgba(31, 46, 66, 1);

          --text-primary: rgba(31, 46, 66, 1);
          --text-accent: var(--accent-400);

          --color-chalk: #006ef0;
          --color-chalk-secondary: #f1f8ff;

          --color-experts: #22722d;
          --color-experts-secondary: #f1fbf3;

          --github-text: #24292e;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --primary-100: rgba(29, 39, 53, 1);
            --primary-200: rgba(23, 32, 43, 1);
            --primary-300: rgba(14, 22, 32, 1);
            --primary-400: rgba(5, 12, 20, 1);

            --accent-100: rgba(81, 117, 164, 1);
            --accent-200: rgba(101, 133, 174, 1);
            --accent-300: rgba(118, 144, 178, 1);
            --accent-400: rgba(139, 162, 193, 1);

            --text-primary: rgba(255, 255, 255, 1);

            --color-chalk: #1a83ff;
            --color-chalk-secondary: #1a212d;

            --color-experts: #1e992f;
            --color-experts-secondary: #1a2620;

            --github-text: #ffffff;
          }
        }

        @media only screen and (min-width: 722px) {
          :root {
            --h1: 30px;
            --h2: 22px;
            --h3: 18px;
          }
        }

        body {
          background-color: var(--primary-100);
          font-family: "Sohne", -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--text-primary);
          overflow-y: scroll;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        body.dark {
          background-color: var(--primary-100);
          color: var(--text-primary);
        }

        html,
        body {
          width: 100%;
          height: 100%;
        }

        html {
          font-size: 16px;
          -webkit-overflow-scrolling: touch;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          line-height: 1.5;
        }

        footer {
          margin-bottom: 2rem;
          font-size: var(--small);
          color: var(--text-accent);
        }

        @media only screen and (min-width: 722px) {
          footer {
            margin-bottom: 1rem;
          }
        }

        img {
          max-width: 100%;
          height: auto;
        }

        ::selection {
          color: var(--primary-100);
          background: var(--text-primary);
          text-shadow: none;
        }

        @media only screen and (min-width: 722px) {
          html {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  )
}

export default GlobalStyle
