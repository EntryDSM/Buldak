interface Props {
    arrowType: 'RIGHT' | 'LEFT';
}

const ArrowIcon = ({ arrowType }: Props) => {
    return (
        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d={arrowType === 'RIGHT' ? 'M0 0L6 4L0 8V0Z' : 'M6 0L0 4L6 8V0Z'}
                fill="#5A5A5A"
            />
        </svg>
    );
};
export default ArrowIcon;
