export default function BellIcon() {
  return (
    <div className="mt-2 relative group">
      <div className="flex items-center cursor-pointer text-sm text-blue py-1 px-2">
        <span className="animate-ping absolute inline-flex w-4 h-4 rounded-full bg-sky-400 opacity-20" />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
      </div>
      <div className="z-10 items-center absolute border border-t-0 rounded-b-lg p-1 bg-white p-2 invisible group-hover:visible">
        <a href="/newsletter" className="  py-2 block text-black hover:bg-grey-lighter">Newsletter</a>
      </div>
    </div>
  );
}
