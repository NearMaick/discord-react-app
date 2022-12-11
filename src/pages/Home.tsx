export function Home() {
  return (
    <div>
      <a
        id='login'
        href='https://discord.com/api/oauth2/authorize?client_id=<your-discord-client-id-here>&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fdiscord&response_type=token&scope=identify'
        className='bg-discord-blue text-xl px-5 py-3 rounded-md font-bold flex items-center space-x-4 hover:bg-gray-600 transition duration-75'>
        <i className='fa-brands fa-discord text-2xl'></i>
        <span>Login with Discord</span>
      </a>
    </div>
  );
}
