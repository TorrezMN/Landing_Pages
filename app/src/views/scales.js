import "./static/css/scales.css";

function Scales() {
  return (
    <div id="scales">
      <div className="title">
        <p>How to know what happens?</p>
      </div>
      <div id="scales_list">
        <div className="scale">
          <p id="good" className="scale_title">
            Good <br /> (0-50)
          </p>
          <p className="scale_desc">
            It is an excellent day for outdoor activities!
          </p>
        </div>
        <div className="scale">
          <p id="moderate" className="scale_title">
            Moderate <br /> (51-100)
          </p>
          <p className="scale_desc">
            Consider reducing activities that require prolonged or intense
            exertion outdoors.
          </p>
        </div>
        <div className="scale">
          <p id="unhealthy_groups" className="scale_title">
            Unhealthy for sensitive groups. <br /> (101-150)
          </p>
          <p className="scale_desc">
            Reduce activities that require prolonged or intense effort. It's
            okay to be outside, but rest often and do less strenuous activities.
          </p>
        </div>
        <div className="scale">
          <p id="unhealthy" className="scale_title">
            Unhealthy <br /> (151-200)
          </p>
          <p className="scale_desc">
            Avoid activities that require prolonged or intense effort. Take into
            account the possibility of carrying out activities indoors or
            rescheduling them.
          </p>
        </div>
        <div className="scale">
          <p id="very_unhealthy" className="scale_title">
            Very Unhealthy <br /> (201-300)
          </p>
          <p className="scale_desc">
            Avoid all physical activities outdoors. Move activities indoors or
            reschedule for when air quality is better.
          </p>
        </div>
        <div className="scale">
          <p id="dangerous" className="scale_title">
            Dangerous <br />
            (301-500)
          </p>
          <p className="scale_desc">Avoid all physical activities outdoors.</p>
        </div>
      </div>

      <div id="docs">
        <a href="#">WANT TO KNOW MORE?</a>
      </div>
    </div>
  );
}

export default Scales;
