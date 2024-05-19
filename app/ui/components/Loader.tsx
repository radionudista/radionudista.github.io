export default function Loader() {

    const color = '#FFFFFF'

    return (
        <div className="sm:w-[8svw] w-[15svw] sm:h-[8svw] h-[15svw]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
          <rect fill="#FFFFFF" stroke={color} strokeWidth="10" width="10" height="30" x="20" y="50">
            <animate attributeName="y" calcMode="spline" dur="2" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.8"></animate>
            <animate attributeName="height" calcMode="spline" dur="2" values="120;120;120;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.8"></animate>
          </rect>
          <rect fill="#FFFFFF" stroke={color} strokeWidth="10" width="10" height="30" x="45" y="50">
            <animate attributeName="y" calcMode="spline" dur="2" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.6"></animate>
            <animate attributeName="height" calcMode="spline" dur="2" values="120;120;120;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.6"></animate>
          </rect>
          <rect fill="#FFFFFF" stroke={color} strokeWidth="10" width="10" height="30" x="70" y="50">
            <animate attributeName="y" calcMode="spline" dur="2" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
            <animate attributeName="height" calcMode="spline" dur="2" values="120;120;120;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
          </rect>
          <rect fill="#FFFFFF" stroke={color} strokeWidth="10" width="10" height="30" x="95" y="50">
            <animate attributeName="y" calcMode="spline" dur="2" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
            <animate attributeName="height" calcMode="spline" dur="2" values="120;120;120;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
          </rect>
          <rect fill="#FFFFFF" stroke={color} strokeWidth="10" width="10" height="30" x="120" y="50">
            <animate attributeName="y" calcMode="spline" dur="2" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
            <animate attributeName="height" calcMode="spline" dur="2" values="120;120;120;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
          </rect>
        </svg>
    </div>
    )
  }