import scissorIcon from '../src/icons/icon-scissors.svg'
import paperIcon from '../src/icons/icon-paper.svg'
import rockIcon from '../src/icons/icon-rock.svg'
import spockIcon from '../src/icons/icon-spock.svg'
import lizardIcon from '../src/icons/icon-lizard.svg'
import { ReactNode } from 'react'

export const ICON_LIST: Record<string, ReactNode> = {
  'scissorIcon': scissorIcon,
  'paperIcon': paperIcon,
  'rockIcon': rockIcon,
  'spockIcon': spockIcon,
  'lizardIcon': lizardIcon,
}

export const ICON_BORDER_COLOR: Record<string, string> = {
  'paperIcon': '#4b8bff',
  'scissorIcon': '#dba748',
  'rockIcon': 'red',
  'spockIcon': 'grey',
  'lizardIcon': 'green',
}

export const BONUS_TOUR = ['paperIcon', 'scissorIcon', 'rockIcon', 'spockIcon', 'lizardIcon']
export const SIMPLE_TOUR = ['paperIcon', 'scissorIcon', 'rockIcon']

export const RESULT: Record<string, string> = {
  'user': 'Вы победили',
  'AI': 'Победил skynet',
  'draw': 'Ничья',
}
