const useOpenLink = () => {
    const navigate = (link: string) => {
        window.open(link, '_blank');
    };

    return { navigate };
};

export default useOpenLink;
