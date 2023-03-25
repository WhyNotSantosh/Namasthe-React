const Modal = ({ closeModal, info }) => {
    return (
        <>
        <div className="fixed top-0 bg-gray-900 bg-opacity-40 left-0 z-[1055] h-full w-full overflow-y-hidden overflow-x-hidden outline-none  ">
            <div className="pointer-events-none absolute right-7 h-auto w-full translate-x-[100%] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] transform-none opacity-100 p-4 m-4">
                <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 p-2">
                <div className="p-2">Info about this page components:</div>
                <div className="p-2">{info}</div>
                <div><button class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"onClick={() => closeModal(false)}>Close</button></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Modal;
