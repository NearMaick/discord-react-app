import { useEffect } from "react";

// `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`

export function Dashboard() {
  useEffect(() => {
    const authFragment = new URLSearchParams(window.location.hash.slice(1));

    const [accessToken, tokenType] = [
      authFragment.get("access_token"),
      authFragment.get("token_type"),
    ];

    fetch("https://discord.com/api/users/@me", {
      headers: {
        authorization: `${tokenType} ${accessToken}`,
      },
    })
      .then((result) => result.json())
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <div className='flex items-center justify-center h-screen bg-discord-gray text-white flex-col'>
      <div className='text-2xl'>Welcome to the dashboard,</div>
      <div className='text-4xl mt-3 flex items-center font-medium'>
        <img src='' id='avatar' className='rounded-full w-12 h-12 mr-3' />
        <div id='name'></div>
      </div>
      <a href='/' className='text-sm mt-5'>
        Logout
      </a>
    </div>
  );
}
