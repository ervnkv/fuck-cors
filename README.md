CORS-proxy-share
This proxy was created with the Next.js API. It is ready to be launched on Vercel. See below for more details on how to launch.

To use this proxy, clone this repository. Run "npm install".

npm install
Then launch it on Vercel.com.

Once the proxy is deployed. You can make requests to it by making HTTP/fetch requests to the domain created by vercel and including a "my-url" header with the link you are trying to reach.

For example: fetch("insert vercel domain", { headers: { my-url: "insert domain you are trying to reach" }})

You should see no CORS errors.
