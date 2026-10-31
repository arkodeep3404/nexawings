import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Reveal = ({ as: Tag = "div", delay = 0, className, children, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={clsx("reveal", visible && "is-visible", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
