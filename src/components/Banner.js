import { Carousel, Button } from "react-bootstrap";

function Banner() {
  return (
    <Carousel fade>

      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="First slide"
          src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/662703664_1639402310727863_8904749008591874104_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGyN-pX3wl5ugp8vvnuu7uWA6EaFeO25tMDoRoV47bm06-uGuKB4-OdOJxofiBzDXVrCIdsaEJwdT-tzy4yH__p&_nc_ohc=j3xQ-A3YkeQQ7kNvwFMXBhL&_nc_oc=AdplwpyALu1bCSmfYXfYk9YtCC_pmQGZrhE171azndw3G5vD23-ryvW7vtLciKSOGP8&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=g1hjQrpQDQdXHO8vp_DnVg&_nc_ss=7a2a8&oh=00_Af8Q_ltW0SGKMLf-M5Zo8h0QDB9oU-qxI3iBNMHlX7saCw&oe=6A2FD651"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h1>Bui Thuy Ngan</h1>
          <Button variant="light"></Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          
          src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/552582501_2419488701780078_7172509667906672183_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s1280x1280&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEJ8UHd2QhSPzng0fdAhRCp_ncPFsV3uVr-dw8WxXe5WvXSvC9zd44byq1UBJHCMM1zfDWh7q8DmrPi4jmACIWO&_nc_ohc=ALw603ZNl0IQ7kNvwGSZ3Jn&_nc_oc=Ado135tm014r__bvuwWc9r6y4n0fJo-RkXpPHsY0EFDNzLTaAdfQSTZA4dDGVAruaqw&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=uKuXMLQfBwXhF1NUMdryyw&_nc_ss=7a2a8&oh=00_Af9fFm7UQtgd2IS56iICXesaoiq6d85sxOGKLiViT2HmEw&oe=6A2FE561"
          alt="Second slide"
          style={{ height: "60vh", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h1>Ng Ngoc Linh</h1>
          <Button variant="light"></Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/719798499_122105538837346585_6499443496968605629_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFYHSOErnvVpDVejbsVm82e7ciS7rc64-rtyJLutzrj6kFd-aED3aBsYowk_hdKVaOF9uI9oJ-XANX6n6gWYVdw&_nc_ohc=fxXkkJxc-PYQ7kNvwFxhOKA&_nc_oc=AdpQPpUh_I8UvgQ92ZUZ4D4tHd20c40LPLxBNqZjeAkQshl9RP6zBZgc4YNwd4NpDWs&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=z896RXOL5zII3skRQYrqcg&_nc_ss=7a2a8&oh=00_Af-6FgLojOrutmo-y1rrth8f_vYpVYGWpkmTh4Fq0IAIZA&oe=6A2FE57B"
          alt="Third slide"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h1>Bao Tran cute</h1>
          <Button variant="light"></Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 4 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/636781145_2140583576714515_5436054836630330321_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGy0WXr1_VGPyOexUe-82nkELSnwYijwAoQtKfBiKPACk63sdJoyFWynJS5bMhVD5Y756OkKL8_Yl7cHjQ_FI6m&_nc_ohc=U5G9I80C9kIQ7kNvwE3wjYM&_nc_oc=Adrvg-A4sE5Mv6J8lLCvmliImAwt0XgUNYWcvw0Ag8Py_K1edo1rxZ8_VX4MJ0ODiwU&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=0HGwNbohwgIYIkevXYnwVA&_nc_ss=7a2a8&oh=00_Af_HJdGA_GlhxSZAuXBoUlwir6sU-W3gGUdP9CCQfOd9ww&oe=6A2FF87B"
          alt="Fourth slide"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h1>Huong Lan</h1>
          <Button variant="light"></Button>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/627112405_1538057830828632_8365069772482285433_n.jpg?stp=dst-jpg_tt6&cstp=mx1366x2048&ctp=s1366x2048&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEX-6OAX60E2_S00Z0SwWamn3oI-qb_z8Cfegj6pv_PwO0BAY_1d99XN4Oao0ej8bwidQJROKcmv8chQ7QcNuOF&_nc_ohc=h6rD6ByXB44Q7kNvwHVxAgI&_nc_oc=AdqZqiJW0POAEjQ38nFCKPoh1yhZMhGuOJmOVkG-NCMVEzSheYwjKRXUj77Jhe5YkKU&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=_iKj48rB62KOvZdWjkFsWQ&_nc_ss=7a2a8&oh=00_Af-fttsH3fBFBP3lSMRt9waRe-h5Oz7miAESlNgQ3P5wPQ&oe=6A30045A"
          alt="Fourth slide"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h1>Huyen Trang</h1>
          <Button variant="light"></Button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Banner;