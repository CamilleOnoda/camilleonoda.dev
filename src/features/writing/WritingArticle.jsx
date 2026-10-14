import { Link } from "react-router-dom";
import SEO from "../../shared/components/seo/SEO";
import "./WritingArticle.css";
import postOfficeImage from "../../Assets/linko-post-office.png";

function BeforeDiagram() {
  return (
    <figure className="writing-article__diagram">
      <div className="writing-article__paths">
        <div className="writing-article__path">
          <strong>Windows browser</strong>
          <span>↓ localhost:8899</span>
          <strong>Windows local forwarding</strong>
          <span>↓</span>
          <strong>Linko in WSL · 8899</strong>
          <span className="writing-article__success">Metrics received</span>
        </div>
        <div className="writing-article__path">
          <strong>Prometheus in Docker</strong>
          <span>↓ host.docker.internal:8899</span>
          <strong>IPv4 host destination</strong>
          <span>↓</span>
          <strong className="writing-article__failure">
            Connection refused
          </strong>
        </div>
      </div>
      <figcaption>
        Before: the browser and Prometheus use different destinations.
      </figcaption>
    </figure>
  );
}

function AfterDiagram() {
  return (
    <figure className="writing-article__diagram">
      <div className="writing-article__path">
        <strong>Prometheus in Docker</strong>
        <span>↓ host.docker.internal:18899</span>
        <strong>Windows forwarding · 18899</strong>
        <span>↓ 172.17.50.63:8899</span>
        <strong>Linko in WSL · 8899</strong>
        <span className="writing-article__success">
          Metrics return through Windows to Prometheus
        </span>
      </div>
      <figcaption>
        After: Windows forwards the connection into WSL.
      </figcaption>
    </figure>
  );
}

function WritingArticle() {
  return (
    <>
      <SEO
        title="Why Could My Browser Reach the App When Prometheus Couldn’t? | Camille Onoda"
        description="Working through Windows, WSL, and Docker networking during a Boot.dev Prometheus lesson, with a post office analogy to explain listeners and port forwarding."
      />
      <main className="writing-article-page">
        <div className="writing-article">
          <Link className="writing-article__back" to="/writing">
            ← Back
          </Link>
          <article>
            <header className="writing-article__header">
              <p className="writing-article__category">Tech, made clear</p>
              <h1>
                Why could my browser reach the app when Prometheus couldn’t?
              </h1>
              <p className="writing-article__author">
                Camille Onoda ·{" "}
                <time dateTime="2026-10-14">14 October 2026</time>
              </p>
            </header>
            <p>
              I was working through a{" "}
              <a href="https://www.boot.dev/">Boot.dev</a> lesson involving Prometheus
              when I got stuck trying to connect it to Linko, the application we were
              using in the lesson. Linko was running inside WSL, Prometheus was running
              in Docker, and I could open Linko’s metrics in my Windows browser. From
              my point of view, everything was there and working, yet Prometheus kept
              showing the target as DOWN.
            </p>
            <p>
              Windows, Docker, WSL, Prometheus… I knew what each was doing
              individually, but I struggled to picture how networking between WSL,
              Docker, and Windows worked.
            </p>
            <p>
              I used AI to help choose checks and interpret the results. Even after
              the connection worked, I still needed a diagram to understand which
              environment was connecting to which address.
            </p>
            <p>
              This is my attempt to explain the part that eventually became
              clearer, including the detour that didn’t help and the connection
              failure we never fully explained.
            </p>
            <h2>Where everything was running</h2>
            <p>
              Prometheus collects metrics by regularly requesting them from an
              application. In this lesson, it needed to reach Linko’s{" "}
              <code>/metrics</code> endpoint on port 8899. My browser could make
              that request, but it was running in a different environment from
              Prometheus.
            </p>
            <table>
              <thead>
                <tr>
                  <th scope="col">Program</th>
                  <th scope="col">Environment</th>
                  <th scope="col">What it was doing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Linko</td>
                  <td>WSL, the Linux environment on Windows</td>
                  <td>Serving metrics on port 8899</td>
                </tr>
                <tr>
                  <td>My browser</td>
                  <td>Windows</td>
                  <td>Opening the metrics page</td>
                </tr>
                <tr>
                  <td>Prometheus</td>
                  <td>A Docker container</td>
                  <td>Trying to collect those metrics</td>
                </tr>
              </tbody>
            </table>
            <p>
              Having all three on my laptop made me think of them as being in the
              same place. For networking, though, those environments have
              boundaries, and a connection that works from Windows may not work
              from a container.
            </p>
            <p>
              That is also why <code>localhost</code> needs some context. It refers
              to the local network environment of the program making the request:
              in my Windows browser, it refers to Windows; inside a container with
              its own network environment, it refers to that container. It doesn’t
              mean “find the application somewhere on this laptop.”
            </p>
            <p>
              A listener is a program waiting for connections at a particular
              address and port. There were two to distinguish here: Linko’s
              listener inside WSL and the Windows listener forwarding requests
              to it.
            </p>
            <h2>Thinking of it as a post office</h2>
            <p>
              I kept coming back to the idea of a post office. Imagine Linko as a
              department inside WSL that receives letters at counter 8899. My
              Windows browser could hand its request to a local reception desk,
              which passed it to that department. Prometheus, coming from Docker,
              approached a different Windows entrance that wasn’t accepting the
              connection on port 8899. The department was still open, but that
              entrance didn’t provide a working path to it.
            </p>
            <p>
              The forwarding rule gave Prometheus a new reception counter, numbered
              18899, with an instruction to pass requests to Linko at WSL’s address,
              counter 8899. The reply could then come back through the same arrangement.
              The address identifies the location; the port identifies the counter there.
            </p>
            <figure className="writing-article__illustration">
              <img
                src={postOfficeImage}
                alt="Before: the browser reaches Linko through a local desk, while Prometheus finds a closed exterior counter. After: a new Windows counter on port 18899 forwards Prometheus’s request to Linko in WSL on port 8899."
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                A post office analogy for the two connection paths.
              </figcaption>
            </figure>
            <p>
              This analogy helps me picture the two listeners, although a network
              connection carries traffic in both directions rather than leaving a
              letter for later delivery. In the technical diagrams below, the
              reception desks are listeners and the forwarding instruction is the
              Windows port-forwarding rule.
            </p>
            <h2>What the browser could reach</h2>
            <p>
              When I opened <code>localhost:8899/metrics</code> in Windows, the
              metrics appeared. Together with the listener checks, this pointed to
              Windows providing a local forwarding path into WSL: I could access
              Linko without explicitly using its Linux IP address.
            </p>
            <p>
              Prometheus was configured to use{" "}
              <code>host.docker.internal:8899</code>. Docker Desktop provides that
              hostname for reaching the host, and in my setup it resolved to the
              IPv4 address <code>192.168.65.254</code>. The connection to that
              address was refused, even though the browser request worked.
            </p>
            <p>
              Checking what was listening on Windows helped me understand the
              difference. The Windows listener we found for port 8899 was on
              <code>::1</code>, the IPv6 loopback address. Loopback is used for
              reaching the local system itself.
            </p>
            <p>
              I had already checked that Linko was listening on port 8899 inside
              WSL, but that was a separate listener. Linko accepting connections
              inside WSL didn’t tell me which connections Windows would accept
              and forward to it.
            </p>
            <h3>Before the fix</h3>
            <BeforeDiagram />
            <p>
              <em>
                These diagrams show the connection paths we were testing, without
                trying to represent all of Docker Desktop’s internals.
              </em>
            </p>
            <p>
              Both requests used port 8899, which had made them look equivalent to
              me. But the Windows listener on <code>::1:8899</code> didn’t accept
              connections addressed to the IPv4 destination Docker was using.
              Matching the port alone wasn’t enough.
            </p>
            <p>
              I initially understood this as an IPv4-versus-IPv6 issue, but the
              loopback address matters as well. An IPv6 listener on loopback
              doesn’t automatically become reachable from other environments just
              because they can use IPv6.
            </p>
            <h2>Adding a forwarding path</h2>
            <p>
              We added a Windows forwarding rule that listened on IPv4 port 18899
              and passed the traffic to <code>172.17.50.63:8899</code>, Linko’s
              address inside WSL at the time. Prometheus could then connect to{" "}
              <code>host.docker.internal:18899</code>, and Windows would make the
              connection into WSL on its behalf.
            </p>
            <h3>After the fix</h3>
            <AfterDiagram />
            <p>
              The different port numbers confused me at first too. Windows
              received the connection on 18899, while Linko received the forwarded
              connection on 8899; those ports don’t need to match. Using another
              port on Windows let us add the new listener without interfering
              with the existing local listener on 8899. We chose 18899 simply
              because it was available and easy to associate with 8899.
            </p>
            <p>
              Once Prometheus used that new destination, the target showed UP,
              meaning it had successfully fetched the metrics. Linko was still
              running in WSL on its original port, but Prometheus now had a working
              path to it through Windows.
            </p>
            <p>
              There are a couple of practical details with this setup: the
              forwarding rule contains WSL’s IP address, so it needs updating if
              that address changes, and the new listener accepts connections on
              all Windows IPv4 interfaces. Whether another machine can access it
              also depends on the Windows firewall.
            </p>
            <h2>The part we didn’t solve</h2>
            <p>
              Before adding the forwarding rule, we tried connecting from Docker
              directly to WSL’s IP address. That timed out, although opening the
              same address in the Windows browser worked. We also found an overlap
              between Docker’s default bridge subnet and WSL’s address range, which
              seemed like a possible explanation, but changing the Docker subnet
              didn’t resolve the timeout.
            </p>
            <p>
              I don’t want to rewrite that as a neat investigation where every
              check led us towards an obvious answer. The subnet change didn’t fix
              it, and we never established why the direct Docker-to-WSL request
              failed. What we did establish was that the Windows forwarding rule
              provided a working route.
            </p>
            <p>
              AI helped me through the checks and their interpretation, but I still
              needed to slow down and work out which environment we were looking
              at each time. In particular, I kept mixing up “Linko is listening
              inside WSL” with “Windows is listening somewhere Docker can reach.”
              Once I separated those two listeners, I could understand why a
              successful browser request didn’t mean Prometheus could reach the
              same endpoint.
            </p>
            <p>
              I went into this Boot.dev lesson expecting to spend time on metrics.
              I ended up spending quite a while trying to understand the
              connections needed to collect them, and I’m keeping the diagrams
              because I’ll probably need to look at them again.
            </p>
          </article>
          <Link className="writing-article__back" to="/writing">
            ← Back
          </Link>
        </div>
      </main>
    </>
  );
}

export default WritingArticle;

