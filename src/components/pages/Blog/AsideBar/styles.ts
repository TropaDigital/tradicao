import styled from 'styled-components';

export const AsideContainer = styled.aside`
  border-left: 1px solid var(--gray-300);
  padding-left: 30px;
  padding-bottom: 50px;
  height: 100%;
  margin: 30px 0;
  min-width: 255px;

  @media (max-width: 768px) {
    min-width: 0;
    border: none;
    padding: 0;
  }

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ListAsideTopics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .topic-title {
    position: relative;
    font-size: 17px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;
    cursor: default;

    &:hover::before {
      width: 23px;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -5px;
      width: 15px;
      height: 2px;
      transition: 300ms ease-in-out;
      background-color: var(--primary-light);
    }
  }

  .list-container {
    display: flex;
    flex-direction: column;
  }

  .topic-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    cursor: pointer;
    line-height: 26px;
    padding: 4px 0;
    transition: 250ms linear;
    color: var(--dark);

    :hover {
      border-color: var(--primary-light);
      border-opacity: 0.7;
    }

    &:last-child {
      border: none;
      position: relative;

      &::before {
        content: '';
        width: 0;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.09);
        transition: 250ms linear;

        position: absolute;
        bottom: -2px;
      }

      &:hover::before {
        background-color: var(--primary-light);
        width: 15px;
      }
    }
  }
`;

export const SuggestsSearchsContainer = styled.div`
  position: relative;

  .suggest-container {
    display: none;
  }

  .suggest-containershow {
    position: absolute;
    top: 52px;
    padding: 10px;
    border: 1px solid var(--gray-300);
    background-color: white;
    min-width: 100%;
    border-radius: 8px;
    max-height: 150px;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 1;
    transition: all 0.3s;

    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    li {
      color: var(--dark);
      border-bottom: 1px solid var(--gray-300);
      transition: 0.3s;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      white-space: nowrap;

      :last-child {
        border: none;
      }

      :hover {
        background-color: var(--gray-200);
      }
    }

    .suggest-option {
      display: block;
      width: 100%;
      height: 100%;
      color: var(--dark);
      padding: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;
