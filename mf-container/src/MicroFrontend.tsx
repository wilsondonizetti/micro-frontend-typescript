import React, { useEffect } from 'react';
const MicroFrontend = (props: any) => {

    //didmount
    useEffect(()=>{
        console.log('props', props);
        const scriptId = `micro-frontend-script-${props.name}`;

        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        fetch(`${props.host}/asset-manifest.json`)
        .then(res => res.json())
        .then(manifest => {
            const script = document.createElement('script');
            script.id = scriptId;
            script.crossOrigin = '';
            script.src = `${props.host}${manifest['files']['main.js']}`;
            script.onload = renderMicroFrontend;
            document.head.appendChild(script);
        });

        console.log('componentDidMount container');
        //componentWillUnmount
        return ()=>{
            window[`unmount${props.name}`] && window[`unmount${props.name}`](`${props.name}-container`);
        }

    },[]);

  const renderMicroFrontend = () => {
      console.log('props renderMicroFrontend', props.name, props);
      // eslint-disable-next-line no-restricted-globals
    window[`render${props.name}`] && window[`render${props.name}`](`${props.name}-container`, history);
  };

  
  return (<main id={`${props.name}-container`} />);
}

export default MicroFrontend;