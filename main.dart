void main() {
  const words = ['listen', 'silent', 'enlist', 'hello', 'world', 'drowl'];

  final groups = <String, List<String>>{};

  for (var word in words) {
    final key = (word.split('')..sort()).join();
    groups.putIfAbsent(key, () => []).add(word);
  }

  final uniqueGroups = groups.values.toSet();

  print('Anagram groups:');
  for (var group in uniqueGroups) {
    print(group);
  }
}