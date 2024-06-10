function A({children,href,className,...props}) {
    return ( 
        <a
          href={href}
          className={className}
          {...props}
        >
          {children}
        </a>
     );
}

export default A;