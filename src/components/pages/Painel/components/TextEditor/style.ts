import styled from 'styled-components';
// import { colors } from '../../../../assets/styles/mixin'

export const TextEditorContainer = styled.div`
  margin: 32px 0;

  .ProseMirror {
    border: 1px solid var(--dark);
    min-height: 405px;
    max-height: 550px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 12px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
      border-bottom-right-radius: 16px;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
      border-bottom-right-radius: 16px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    h2,
    h3 {
      margin-bottom: 13px;
      margin-bottom: 13px;
    }

    p {
      margin-bottom: 20px;
    }

    .strong {
      font-weight: bold;
    }

    .italic {
      font-style: italic;
    }

    .underline {
      text-decoration: underline;
    }

    .strong .italic {
      font-weight: bold;
      font-style: italic;
    }
    .strong span {
      font-weight: bold;
    }

    .strong .italic span {
      font-weight: bold;
      font-style: italic;
    }

    .strong .underline {
      font-weight: bold;
      text-decoration: underline;
    }

    .strong .italic .underline {
      font-weight: bold;
      font-style: italic;
      text-decoration: underline;
    }

    ul,
    ol {
      padding-left: 20px;
    }

    .bullet-list {
      li {
        list-style: disc;
      }
    }

    .ordered-list {
      li {
        list-style: decimal;
      }
    }
  }
`;
