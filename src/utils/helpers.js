import { navigate } from 'gatsby';

export default function navigateToRoute(route, external) {
  if (route) {
    if (external) {
      window.open(route, '_blank');
    } else {
      navigate(route);
    }
  }
}