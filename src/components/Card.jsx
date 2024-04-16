import React, { useEffect, useState } from "react";

const Card = () => {
  const [apiData, setApiData] = useState("");
  useEffect(() => {
    const gitData = async () => {
      try {
        const apiUrl = await fetch(
          "https://api.github.com/users/vishal-gitthub"
        );
        if (!apiUrl) {
          return console.log("error in api url");
        }
        const apiResponse = await apiUrl.json();
        console.log(apiResponse);
        setApiData(apiResponse);
      } catch (error) {
        console.log(error, "found this error");
      }
    };
    gitData();
  }, []);
  return (
    <div>
      <div className="w-3/5 h-96 m-auto dark:bg-gray-800 dark:text-white">
        <div className="text-center text-2xl mb-3">{apiData.login}</div>
        <img
          src={apiData.avatar_url}
          alt=""
          className="w-60 rounded-full m-auto"
        />
        <h1 className="text-2xl">Name:- {apiData.name}</h1>
      </div>
    </div>
  );
};

export default Card;
