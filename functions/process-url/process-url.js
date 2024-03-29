const cloudinary = require("cloudinary").v2;
const qs = require("querystring");
cloudinary.config({
  cloud_name: "dbivgulsd",
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

exports.handler = async function(event, ctx) {
  const { queryStringParameters } = event;
  console.log(queryStringParameters);
  try {
    // https://res.cloudinary.com/sector/image/upload/v1583637123/og-images/img-1.png
    const imageUrl = cloudinary.url(
      `${process.env.IMAGE_VERSION}/og-images/img-1.jpg`,
      {
        // resouce_type: "raw"
        sign_url: true,
        // secure: true,
        custom_pre_function: {
          function_type: "remote",
          source: `https://peaceful-jepsen-6d77ee.netlify.app/.netlify/functions/gen-opengraph-image?${qs.stringify(
            queryStringParameters
          )}`
        }
      }
    );
    console.log(`https://relaxed-payne-d1bfbe.netlify.app/.netlify/functions/gen-opengraph-image?${qs.stringify(
            queryStringParameters
          )}`)
    return {
      statusCode: 302,
      headers: {
        Location: imageUrl
      },
      body: ""
    };
  } catch (e) {
    console.log(e);
  }
};
