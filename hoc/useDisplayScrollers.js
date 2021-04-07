import { useEffect, useState } from "react";

export default function useDisplayScrollers() {
    const [scrollers, setScrollers] = useState(false)
    const displayScrollers = (target) => {
        if (target.scrollWidth > target.clientWidth) {
            setScrollers(true)
        } else {
            setScrollers(false)
        }
    }
    return { scrollers, displayScrollers }
}