'use-client'
export default function Loader() {

    const color = '#FFFFFF'

    return (
        <div className="sm:w-[3svw] w-[10svw] sm:h-[3svw] h-[10svw] mx-[1vw]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 8 100 100">
          <rect fill="#FFFFFF" stroke={color} strokeWidth="1" width="5" height="20" x="20" y="50">
            <animate attributeName="y" calcMode="spline" dur="2" values="50;40;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.8"></animate>
            <animate attributeName="height" calcMode="spline" dur="2" values="20;40;20;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.8"></animate>
          </rect>
          <rect fill="#FFFFFF" stroke={color} strokeWidth="1" width="5" height="20" x="30" y="50">
            <animate attributeName="y" calcMode="spline" dur="2" values="50;40;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.6"></animate>
            <animate attributeName="height" calcMode="spline" dur="2" values="20;40;20;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.6"></animate>
          </rect>
          <rect fill="#FFFFFF" stroke={color} strokeWidth="1" width="5" height="20" x="40" y="50">
            <animate attributeName="y" calcMode="spline" dur="2" values="50;40;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
            <animate attributeName="height" calcMode="spline" dur="2" values="20;40;20;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
          </rect>
          <rect fill="#FFFFFF" stroke={color} strokeWidth="1" width="5" height="20" x="50" y="50">
            <animate attributeName="y" calcMode="spline" dur="2" values="50;40;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
            <animate attributeName="height" calcMode="spline" dur="2" values="20;40;20;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
          </rect>
          <rect fill="#FFFFFF" stroke={color} strokeWidth="1" width="5" height="20" x="60" y="50">
            <animate attributeName="y" calcMode="spline" dur="2" values="50;40;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
            <animate attributeName="height" calcMode="spline" dur="2" values="20;40;20;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
          </rect>
        </svg>
    </div>
    )
  }