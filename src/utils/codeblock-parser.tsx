import CodeBlock from "@/components/blocks/code-block";

export const CodeblockParser = (chatContent: string) => (
    <div className="w-full grid gap-2">
      {chatContent.split("'''")?.map((textSnippet, index) => (
        <>
          {index % 2 == 1 ? (
            <CodeBlock key={index} code={textSnippet.trim()} />
          ) : (
            <p key={index} className="whitespace-pre-line">{textSnippet.trim()}</p>
          )}
        </>
      ))}
    </div>
  );