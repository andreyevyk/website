import styled, { css } from 'styled-components';

export const feedbackWithStyle = component => 
  styled(component)( 
  ({theme}) => css`

    a {
      cursor: pointer;
      color: rgba(0, 0, 0, 0.65) !important;
      
      :first-child {
        margin-right: 3px;
      }  
      
      span{
        transition:transform 0.2s ease-in;
        
        :hover{
          transform: scale(1.15);
        }
      }      
      .like {
        color: rgb(6,158,81);
      }
      .dislike {
        color: rgb(215,15,16);
      }
      .anticon-like:hover{
        color: rgb(6,158,81);
      }
      .anticon-dislike:hover{
        color: rgb(215,15,16);
      }
      
    }      
`)