import * as React from 'react';

/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { Button } from '../components';

export default function Buttons() {
  return (
    <div
      css={tw`w-screen h-screen flex items-center justify-center bg-gray-100`}
    >
      <div css={tw`w-full mx-auto py-16`}>
        <div
          css={tw`bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow-DEFAULT rounded-md flex items-center`}
        >
          <h1 css={tw`text-3xl text-center font-bold`}>
            Button Component (variants)
          </h1>
          <div css={tw`mx-auto flex gap-2`}>
            <Button variant="default" size="sm">
              Default
            </Button>
            <Button variant="primary" size="sm">
              Primary
            </Button>
            <Button variant="success" size="sm">
              Success
            </Button>
            <Button variant="info" size="sm">
              Info
            </Button>
            <Button variant="warning" size="sm">
              Warning
            </Button>
            <Button variant="error" size="sm">
              Error
            </Button>
          </div>
        </div>
        <div
          css={tw`bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow-DEFAULT rounded-md flex items-center`}
        >
          <h1 css={tw`text-3xl text-center font-bold`}>
            Button Component (sizes)
          </h1>
          <div css={tw`mx-auto`}>
            <Button variant="primary" size="xs" css={tw`mr-2`}>
              Button XS
            </Button>
            <Button variant="primary" size="sm" css={tw`mr-2`}>
              Button SM
            </Button>
            <Button variant="primary" size="lg" css={tw`mr-2`}>
              Button LG
            </Button>
            <Button variant="primary" size="xl" css={tw`mr-2`}>
              Button XL
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
