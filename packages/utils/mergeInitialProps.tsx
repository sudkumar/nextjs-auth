import { NextComponentType } from "next";

export function mergeInitialProps(
  ...fns: Array<((...args: any) => { [key: string]: any }) | undefined>
) {
  if (fns.length === 0) {
    return async () => {};
  }
  return async (...args: any) => {
    let props = {};
    for (let i = 0; i < fns.length; i++) {
      const fn = fns[i];
      if (!fn) {
        continue;
      }
      let newProps = {};
      try {
        newProps = await fn(...args);
      } catch (e) {}
      props = {
        ...props,
        ...newProps
      };
    }
    return props;
  };
}

export default function withMergeInitialProps(
  ...fns: Array<(...args: any) => { [key: string]: any }>
) {
  return function mergeTo(Component: NextComponentType) {
    const WithMergeInitialProp: NextComponentType = function WithMergeInitialProp(
      props
    ) {
      return <Component {...props} />;
    };
    WithMergeInitialProp.getInitialProps = mergeInitialProps(
      Component.getInitialProps,
      ...fns
    );
    return WithMergeInitialProp;
  };
}
