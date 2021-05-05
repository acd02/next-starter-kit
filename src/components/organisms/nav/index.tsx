import { css } from '@emotion/react'
import { Link } from 'components/atoms/link'
import { memo } from 'react'
import { badgeStyles } from 'styles/common/badge'
import { themeGet } from 'theme/get'

function _Nav() {
  return (
    <nav css={styles.root}>
      <header css={[styles.header, badgeStyles]}>nav</header>
      <div css={styles.linksContainer}>
        <Link route="index" label="home" />
        <Link route="users" label="users" />
      </div>
    </nav>
  )
}

const styles = {
  root: css`
    flex: none;
    padding: ${themeGet('space', '$4')} 0;
    border-bottom: 1px solid ${themeGet('colors', '$grey300')};
    text-align: center;
  `,
  header: css`
    display: inline-block;
    margin-bottom: ${themeGet('space', '$4')};
  `,
  linksContainer: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & > a:not(:last-of-type) {
      margin-right: ${themeGet('space', '$3')};
    }
  `,
}

export const Nav = memo(_Nav)
