import CodeBlock from "@/components/blocks/code-block";

export const CodeblockParser = (chatContent: string) => (
    <div className="w-full grid gap-2">
      {chatContent.split("'''")?.map((textSnippet, index) => (
        <div key={index}>
          {index % 2 == 1 ? (
            <CodeBlock code={textSnippet.trim()} />
          ) : (
            <p className="whitespace-pre-line">{textSnippet.trim()}</p>
          )}
        </div>
      ))}
    </div>
  );