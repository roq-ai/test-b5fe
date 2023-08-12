const mapping: Record<string, string> = {
  habits: 'habit',
  organizations: 'organization',
  progresses: 'progress',
  'training-programs': 'training_program',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
