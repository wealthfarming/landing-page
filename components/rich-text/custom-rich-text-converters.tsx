export function getCustomRichTextConverters(defaultConverters: any) {
  return {
    ...defaultConverters,
    heading: ({ node, nodesToJSX, converters, parent, childIndex }: any) => {
      const children = nodesToJSX({ nodes: node.children, parent, converters });

      if (node.tag === 'h2') {
        return <h2 className="h2-rich">{children}</h2>;
      }
      if (node.tag === 'h1') {
        return <h1 className="h1-rich mt-10">{children}</h1>;
      }

      return typeof defaultConverters.heading === 'function'
        ? defaultConverters.heading({ node, nodesToJSX, converters, parent, childIndex })
        : null;
    },
    paragraph: ({ node, nodesToJSX, converters, parent, childIndex }: any) => {
      const children = nodesToJSX({ nodes: node.children, parent, converters });
      return <p className="mt-2 p-rich">{children}</p>;
    },
    text: ({ node }: any) => {
      const FORMAT_BOLD = 1 << 0;
      const FORMAT_ITALIC = 1 << 1;
      const FORMAT_CODE = 1 << 4;

      let text = node.text;

      let element: React.ReactNode = text;

      if ((node.format & FORMAT_CODE) !== 0) {
        element = <code className="code-rich">{element}</code>;
      }
      if ((node.format & FORMAT_ITALIC) !== 0) {
        element = <em>{element}</em>;
      }
      if ((node.format & FORMAT_BOLD) !== 0) {
        element = <strong>{element}</strong>;
      }

      return element;
    },
    list: ({ node, nodesToJSX, converters }: any) => {
      const children = nodesToJSX({ nodes: node.children, parent: node, converters });

      const isOrdered = node.listType === 'number' || node.tag === 'ol'; // tùy CMS có `listType` hoặc `tag`

      const ListTag = isOrdered ? 'ol' : 'ul';
      const className = isOrdered
        ? 'list-decimal list-outside pl-[30.2812px] p-rich space-y-1'
        : 'list-disc list-outside pl-[30.2812px] p-rich space-y-1';

      return <ListTag className={className}>{children}</ListTag>;
    },
  };
}
