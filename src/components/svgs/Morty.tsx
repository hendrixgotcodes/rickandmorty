import * as React from "react"

function Morty():JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100"
    >
      <circle cx={20.5} cy={61.5} r={7.5} fill="#fed5b3" />
      <path d="M20.5 70c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5zm0-15c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5z" />
      <circle cx={79.5} cy={62.5} r={7.5} fill="#fed5b3" />
      <path d="M79.5 71c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5zm0-15c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5z" />
      <path
        fill="#b77748"
        d="M84 49c-4.629 15.044-15.222 19-34 19s-31.585-5.635-35-21c-2-9 4.741-17.483 7-22 5-10 15.403-13.031 28-14 13-1 23.014 5.444 28.994 13.607C82.169 28.941 86 42.5 84 49z"
      />
      <path d="M50 69c-20.951 0-32.719-7.125-35.976-21.783-1.703-7.664 2.583-14.919 5.419-19.721.668-1.132 1.246-2.11 1.663-2.943 5.651-11.303 17.739-13.698 28.818-14.55 11.807-.911 22.69 4.201 29.877 14.013 3.431 4.684 7.26 18.436 5.155 25.278C79.906 65.703 67.837 69 50 69zm2.589-57.1c-.832 0-1.669.032-2.512.097-14.913 1.147-23.042 5.169-27.182 13.45-.448.896-1.042 1.901-1.729 3.066-2.836 4.801-6.721 11.377-5.189 18.27C19.042 60.576 29.853 67 50 67c20.241 0 28.889-4.787 33.044-18.294 1.851-6.013-1.729-19.24-4.856-23.508C71.932 16.658 62.707 11.9 52.589 11.9z" />
      <path
        fill="#fed5b3"
        d="M82 56.03C82 74.256 68.225 88 50 88S18 73.225 18 55s13.775-33 32-33 32 15.805 32 34.03z"
      />
      <path d="M50 89c-18.505 0-33-14.935-33-34s14.495-34 33-34c18.196 0 33 15.714 33 35.03C83 74.826 68.813 89 50 89zm0-66c-17.383 0-31 14.056-31 32 0 17.944 13.617 32 31 32 17.673 0 31-13.314 31-30.97C81 37.817 67.094 23 50 23z" />
      <path
        fill="#fff"
        d="M25.536 47.496c-.008.169-.036.333-.036.504 0 5.799 4.701 10.5 10.5 10.5S46.5 53.799 46.5 48c0-.431-.039-.851-.091-1.268-6.92-1.18-13.878-.916-20.873.764z"
      />
      <path d="M36 59c-6.065 0-11-4.935-11-11 0-.117.01-.231.021-.346l.015-.183a.5.5 0 01.383-.462c7.05-1.692 14.142-1.953 21.074-.771a.499.499 0 01.412.432c.045.36.095.836.095 1.33 0 6.065-4.935 11-11 11zm-9.997-11.101A1.703 1.703 0 0026 48c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.291-.02-.579-.045-.837-6.569-1.069-13.275-.822-19.952.736z" />
      <path
        fill="#fff"
        d="M53.517 47.766c-.002.079-.017.155-.017.234 0 5.799 4.701 10.5 10.5 10.5S74.5 53.799 74.5 48c0-.487-.037-.964-.102-1.433-6.923-1.035-13.883-.628-20.881 1.199z"
      />
      <path d="M64 59c-6.065 0-11-4.935-11-11 0-.06.005-.118.011-.176.006-.223.164-.485.38-.542 7.046-1.839 14.136-2.247 21.081-1.21a.5.5 0 01.421.425c.071.511.107 1.017.107 1.503 0 6.065-4.935 11-11 11zm-9.992-10.844C54.124 53.637 58.563 58 64 58c5.514 0 10-4.486 10-10 0-.323-.018-.656-.053-.993-6.569-.932-13.272-.545-19.939 1.149zM51.939 64.478c-2.858 0-5.686-3.485-5.83-3.665a.501.501 0 01.781-.625c.038.047 3.747 4.619 6.333 2.896.441-.294.679-.672.727-1.156.168-1.695-1.966-4.237-2.803-5.074a.5.5 0 01.707-.707c.137.137 3.339 3.371 3.091 5.88-.078.79-.471 1.426-1.167 1.89a3.26 3.26 0 01-1.839.561z" />
      <path
        fill="#fed5b3"
        d="M30.545 39.029a10.5 10.5 0 00-5.026 8.586c7.009-1.842 13.979-2.12 20.909-.801a10.496 10.496 0 00-4.381-7.397M57.538 39.725a10.576 10.576 0 00-3.296 4.401 10.491 10.491 0 00-.737 3.766c7.005-1.99 13.97-2.418 20.896-1.258a10.502 10.502 0 00-4.237-7.131"
      />
      <path d="M30.5 35a.5.5 0 01-.258-.929c.211-.127 5.268-3.088 12.395-1.052a.5.5 0 01-.274.962c-6.714-1.919-11.558.919-11.605.948A.505.505 0 0130.5 35z" />
      <path fill="#ead6c7" d="M41.5 74.5s9.958-3.295 19 0" />
      <path d="M60.5 75a.514.514 0 01-.171-.03c-8.77-3.195-18.574-.027-18.672.005a.5.5 0 01-.314-.949c.414-.137 10.227-3.313 19.328.005A.5.5 0 0160.5 75zM69.5 35a.504.504 0 01-.224-.053c-5.76-2.879-12.571-.986-12.639-.966a.5.5 0 11-.275-.962c.295-.083 7.257-2.018 13.361 1.034A.5.5 0 0169.5 35z" />
      <circle cx={35.5} cy={47.5} r={1.5} />
      <circle cx={64.5} cy={47.5} r={1.5} />
      <path d="M25.52 48.116a.502.502 0 01-.5-.518 11.02 11.02 0 011.458-5.089.5.5 0 01.867.499 10.04 10.04 0 00-1.278 3.953c6.616-1.645 13.259-1.899 19.766-.763a10.017 10.017 0 00-4.073-6.372.5.5 0 11.577-.817 11.013 11.013 0 014.589 7.75.5.5 0 01-.59.547c-6.801-1.293-13.761-1.026-20.689.793a.51.51 0 01-.127.017zM28.692 40.968a.5.5 0 01-.348-.858 11.003 11.003 0 011.94-1.507.5.5 0 11.522.854c-.636.388-1.229.849-1.765 1.37a.5.5 0 01-.349.141zM53.506 48.393a.5.5 0 01-.5-.505c.013-1.318.257-2.606.726-3.829a.5.5 0 11.934.358 9.92 9.92 0 00-.631 2.81c6.607-1.784 13.247-2.187 19.761-1.196a10.055 10.055 0 00-3.925-6.124.5.5 0 01.588-.809 11.046 11.046 0 014.439 7.471.498.498 0 01-.579.557c-6.802-1.14-13.758-.721-20.676 1.246a.46.46 0 01-.137.021zM55.429 42.439a.498.498 0 01-.408-.789 11.066 11.066 0 012.209-2.319.5.5 0 01.617.787 10.05 10.05 0 00-2.01 2.109.497.497 0 01-.408.212z" />
    </svg>
  )
}

export default Morty