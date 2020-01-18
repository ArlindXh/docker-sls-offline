module.exports.handler = async event => {
  console.log("Hello World");
  let obj = {
    statusCode: 200,
    body: "Hello World"
  };
  return obj;
};
