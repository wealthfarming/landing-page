import Image from 'next/image';
import { API_URL } from '@/lib/config';

export function getCustomRichTextConverters(defaultConverters: any) {
  return {
    ...defaultConverters,
    heading: ({ node, nodesToJSX, converters, parent, childIndex }: any) => {
      const children = nodesToJSX({ nodes: node.children, parent, converters });

      if (node.tag === 'h1') {
        return <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-8 mb-4">{children}</h1>;
      }
      if (node.tag === 'h2') {
        return <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)] mt-6 mb-3">{children}</h2>;
      }
      if (node.tag === 'h3') {
        return <h3 className="text-xl md:text-2xl font-medium text-[var(--primary)] mt-4 mb-2">{children}</h3>;
      }

      return typeof defaultConverters.heading === 'function'
        ? defaultConverters.heading({ node, nodesToJSX, converters, parent, childIndex })
        : null;
    },
    paragraph: ({ node, nodesToJSX, converters, parent, childIndex }: any) => {
      const children = nodesToJSX({ nodes: node.children, parent, converters });
      return <p className="mt-2 mb-4 text-[var(--text-primary)] leading-relaxed text-base md:text-lg">{children}</p>;
    },
    text: ({ node }: any) => {
      const FORMAT_BOLD = 1 << 0;
      const FORMAT_ITALIC = 1 << 1;
      const FORMAT_CODE = 1 << 4;

      let text = node.text;

      let element: React.ReactNode = text;

      if ((node.format & FORMAT_CODE) !== 0) {
        element = <code className="bg-gray-100 text-[var(--primary)] px-1 py-0.5 rounded">{element}</code>;
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

      const isOrdered = node.listType === 'number' || node.tag === 'ol';

      const ListTag = isOrdered ? 'ol' : 'ul';
      const className = isOrdered
        ? 'list-decimal list-outside pl-8 mb-4 text-[var(--text-primary)] space-y-2'
        : 'list-disc list-outside pl-8 mb-4 text-[var(--text-primary)] space-y-2';

      return <ListTag className={className}>{children}</ListTag>;
    },
    link: ({ node, nodesToJSX, converters }: any) => {
      const children = nodesToJSX({ nodes: node.children, parent: node, converters });
      const { url, newTab } = node.fields;
      return (
        <a
          href={url}
          target={newTab ? '_blank' : '_self'}
          rel={newTab ? 'noopener noreferrer' : undefined}
          className="text-[var(--primary)] underline hover:text-[var(--primary-hover)] transition-colors"
        >
          {children}
        </a>
      );
    },
    autolink: ({ node, nodesToJSX, converters }: any) => {
      const children = nodesToJSX({ nodes: node.children, parent: node, converters });
      const { url } = node.fields;
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] underline hover:text-[var(--primary-hover)] transition-colors"
        >
          {children}
        </a>
      );
    },
    upload: ({ node }: any) => {
      const { value } = node;
      if (!value || !value.url) return null;

      const src = `${API_URL}${value.url}`;
      const alt = value.filename || 'Image';
      const width = value.width || 800;
      const height = value.height || 600;

      return (
        <div className="my-6">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      );
    },
    array: ({ node, nodesToJSX, converters }: any) => {
      const children = nodesToJSX({ nodes: node.children, parent: node, converters });
      return (
        <div className="my-4 border-l-4 border-[var(--primary)] pl-4">
          {children}
        </div>
      );
    },
    blocks: ({ node, nodesToJSX, converters }: any) => {
      const children = nodesToJSX({ nodes: node.children, parent: node, converters });
      return (
        <div className="my-4 bg-gray-50 p-4 rounded-lg">
          {children}
        </div>
      );
    },
    checkbox: ({ node }: any) => {
      return (
        <span className="inline-flex items-center text-[var(--text-primary)]">
          <input
            type="checkbox"
            checked={node.value}
            disabled
            className="mr-2"
          />
          {node.value ? 'Checked' : 'Unchecked'}
        </span>
      );
    },
    code: ({ node }: any) => {
      return (
        <pre className="bg-gray-800 text-white p-4 rounded-lg my-4 overflow-x-auto">
          <code>{node.value}</code>
        </pre>
      );
    },
    date: ({ node }: any) => {
      const date = new Date(node.value);
      const formattedDate = new Intl.DateTimeFormat('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date);
      return <span className="text-[var(--text-primary)]">{formattedDate}</span>;
    },
    email: ({ node }: any) => {
      return (
        <a
          href={`mailto:${node.value}`}
          className="text-[var(--primary)] underline hover:text-[var(--primary-hover)] transition-colors"
        >
          {node.value}
        </a>
      );
    },
    group: ({ node, nodesToJSX, converters }: any) => {
      const children = nodesToJSX({ nodes: node.children, parent: node, converters });
      return <div className="my-4">{children}</div>;
    },
    json: ({ node }: any) => {
      return (
        <pre className="bg-gray-800 text-white p-4 rounded-lg my-4 overflow-x-auto">
          <code>{JSON.stringify(node.value, null, 2)}</code>
        </pre>
      );
    },
    number: ({ node }: any) => {
      return <span className="text-[var(--text-primary)]">{node.value}</span>;
    },
    point: ({ node }: any) => {
      return (
        <span className="text-[var(--text-primary)]">
          ({node.value?.x || 0}, {node.value?.y || 0})
        </span>
      );
    },
    radio: ({ node }: any) => {
      return <span className="text-[var(--text-primary)]">{node.value}</span>;
    },
    relationship: ({ node }: any) => {
      return (
        <span className="text-[var(--text-primary)]">
          {node.value?.title || node.value?.id || 'Relationship'}
        </span>
      );
    },
    select: ({ node }: any) => {
      return <span className="text-[var(--text-primary)]">{node.value}</span>;
    },
    tabs: ({ node, nodesToJSX, converters }: any) => {
      const children = nodesToJSX({ nodes: node.children, parent: node, converters });
      return (
        <div className="my-4 border-t border-[var(--other-border)] pt-4">
          {children}
        </div>
      );
    },
    textarea: ({ node }: any) => {
      return <p className="mt-2 mb-4 text-[var(--text-primary)] leading-relaxed text-base md:text-lg">{node.value}</p>;
    },
  };
}