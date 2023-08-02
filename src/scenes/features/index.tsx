import Line7 from "../../assets/Line7.png";
import link from "../../assets/link.png";
import edit from "../../assets/edit.png";
import grid from "../../assets/grid.png";
import activity from "../../assets/activity.png";


const Features = () => {
  return (
    <div className="features">
      <div className="feature">
        <div>
          <div className="titles">
            <img alt="line" src={Line7} className="line7" />
            <h2 className="title">
              Why choose <span className="url">Scissors</span>
            </h2>
          </div>
          <p className="parag1" id="parag">
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.
          </p>
        </div>
        <div>
          <img alt="link" src={link} className="small-logo" />
          <h3>URL Shortening</h3>
          <p className="parag1">
            Scissors allows you to shorten URLs of your business, events.
            Shorten your URL at scale, URL redirects.
          </p>
        </div>
        <div>
          <img alt="edit" src={edit} className="small-logo" />
          <h3>Custom URLs</h3>
          <p className="parag1">
            With scissors, you can create custom URLs, with the length you want!
            A solution for socials and businesses.
          </p>
        </div>
      </div>
      <div className="feature-two">
        <div>
          <img alt="grid" src={grid} className="small-logo" />
          <h3>QR Codes</h3>
          <p className="parag1">
            Generate QR codes to your business,events. Bring your audience and
            customers to your doorstep with thiis scan and go solution.
          </p>
        </div>
        <div>
          <img alt="activity" src={activity} className="small-logo" />
          <h3>Data Activity</h3>
          <p className="parag1">
            Receive data on the usage of either your shortened URL, custom URLs,
            or generated QR codes. Embedded to monitor progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
