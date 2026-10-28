import type { CategoriaId } from "@/content/tipos";

export function CategoryPreview({
  categoria,
  className = "",
}: {
  categoria: CategoriaId;
  className?: string;
}) {
  return (
    <div className={`category-preview ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 225" fill="none" focusable="false">
        <path
          d="M0 56H400M0 112H400M0 168H400M80 0V225M160 0V225M240 0V225M320 0V225"
          stroke="currentColor"
          opacity=".07"
        />
        {categoria === "power-apps" ? (
          <g stroke="currentColor">
            <rect
              x="150"
              y="18"
              width="100"
              height="190"
              rx="19"
              opacity=".7"
            />
            <rect
              x="161"
              y="41"
              width="78"
              height="143"
              rx="5"
              fill="currentColor"
              fillOpacity=".04"
            />
            <path
              d="M186 29H214M181 66H219M181 77H206M175 146H225"
              opacity=".6"
            />
            <rect
              x="175"
              y="96"
              width="50"
              height="34"
              rx="5"
              fill="currentColor"
              fillOpacity=".15"
            />
            <circle cx="200" cy="195" r="3" />
          </g>
        ) : categoria === "power-automate" ? (
          <g stroke="currentColor">
            <path
              d="M85 112H170M230 112H315M200 82V45H300"
              strokeDasharray="4 5"
              opacity=".6"
            />
            {[55, 170, 285].map((x, i) => (
              <g key={x}>
                <rect
                  x={x}
                  y="82"
                  width="60"
                  height="60"
                  rx="14"
                  fill="currentColor"
                  fillOpacity={i === 1 ? ".15" : ".04"}
                />
                <path d={`M${x + 20} 112h20m-10-10v20`} opacity=".7" />
              </g>
            ))}
            <circle
              cx="300"
              cy="45"
              r="7"
              fill="currentColor"
              fillOpacity=".2"
            />
          </g>
        ) : categoria === "bots-ia" ? (
          <g stroke="currentColor">
            <rect
              x="74"
              y="49"
              width="174"
              height="74"
              rx="16"
              fill="currentColor"
              fillOpacity=".06"
            />
            <path d="M98 78H214M98 93H175M248 108L268 133H180" opacity=".6" />
            <rect
              x="161"
              y="136"
              width="163"
              height="50"
              rx="14"
              fill="currentColor"
              fillOpacity=".12"
            />
            <circle cx="193" cy="161" r="3" />
            <circle cx="211" cy="161" r="3" />
            <circle cx="229" cy="161" r="3" />
          </g>
        ) : categoria === "python" ? (
          <g stroke="currentColor">
            <rect
              x="52"
              y="35"
              width="296"
              height="158"
              rx="10"
              fill="currentColor"
              fillOpacity=".035"
            />
            <path d="M52 61H348" opacity=".5" />
            <circle cx="69" cy="48" r="2" />
            <circle cx="80" cy="48" r="2" />
            <circle cx="91" cy="48" r="2" />
            <path
              d="M75 84l8 7-8 7M94 98h22M75 120h87M87 137h139M87 151h109"
              strokeWidth="2"
              opacity=".8"
            />
            <path d="M239 100h37l14 14-14 14h-37zM239 145h64" opacity=".4" />
            <path d="M75 173l8 7-8 7M94 187h12" strokeWidth="2" />
          </g>
        ) : (
          <g stroke="currentColor">
            <rect
              x="52"
              y="35"
              width="296"
              height="158"
              rx="10"
              fill="currentColor"
              fillOpacity=".025"
            />
            <path d="M52 59H348" opacity=".5" />
            <circle cx="67" cy="47" r="2" />
            <circle cx="77" cy="47" r="2" />
            <circle cx="87" cy="47" r="2" />
            {categoria === "power-bi" ? (
              <>
                <rect
                  x="70"
                  y="77"
                  width="74"
                  height="33"
                  rx="5"
                  fill="currentColor"
                  fillOpacity=".13"
                />
                <rect
                  x="154"
                  y="77"
                  width="74"
                  height="33"
                  rx="5"
                  fill="currentColor"
                  fillOpacity=".06"
                />
                <rect
                  x="238"
                  y="77"
                  width="90"
                  height="33"
                  rx="5"
                  fill="currentColor"
                  fillOpacity=".06"
                />
                <path
                  d="M78 166V141H97V166M110 166V126H129V166M142 166V148H161V166M174 166V134H193V166"
                  opacity=".7"
                />
                <circle cx="274" cy="148" r="23" strokeWidth="7" opacity=".4" />
              </>
            ) : (
              <>
                <rect
                  x="70"
                  y="77"
                  width="73"
                  height="99"
                  rx="5"
                  fill="currentColor"
                  fillOpacity=".08"
                />
                <rect
                  x="157"
                  y="77"
                  width="171"
                  height="37"
                  rx="5"
                  fill="currentColor"
                  fillOpacity=".13"
                />
                <rect x="157" y="126" width="78" height="50" rx="5" />
                <rect
                  x="249"
                  y="126"
                  width="79"
                  height="50"
                  rx="5"
                  opacity=".4"
                />
              </>
            )}
          </g>
        )}
      </svg>
    </div>
  );
}
